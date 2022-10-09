
import React, { useState, useEffect, useRef,useMemo } from 'react';
import { useParams } from "react-router-dom";
import { ListAPI } from "@/api";
import IScroll from "iscroll";
import imagesLoaded from 'imagesloaded';
import ListContext from "./listContext";
import ListUI from "./ListUI";


const List = () => {

    let [list, setList] = useState([]);
    let [model, setModel] = useState({
        name: '',cid: parseInt(useParams().cid), orderCol: 'price', orderDir: 'asc', pageSize: 6,
    });
    const ref = useRef(null);
    const scrollRef = useRef(null)
    const [hasMore, setHasMore] = useState(true);
    // const [scroll,setScroll] = useState(null)
    let getList = async (isLoadMore = false) => {
            if(!isLoadMore) setList([]);
            let mainList = await ListAPI.get({ ...model, begin: isLoadMore? list.length : 0 });
            setHasMore(model.pageSize === mainList.length);
            if(isLoadMore) setList([...list, ...mainList]);
            else setList([...mainList]);
    };
    useEffect(() => {
        getList().then(() => {})
    },[]);
    useEffect(() => {
        if(list.length === 0) return
        refreshOrNot();
        return () => {
            scrollRef.current.destroy();
            scrollRef.current = null
        }
    } ,[list,hasMore])
    const tip = useMemo( () => {
        if (hasMore) return '上拉加载更多';
        else if (list.length === 0) return '暂无更多商品';
        else return '已到底部'
    },[hasMore,list])
    const refreshOrNot =  () => {
        imagesLoaded(()=>{
            if(scrollRef.current) scrollRef.current.refresh()
            else {
                scrollRef.current = new IScroll(ref.current,{
                    bounce: false, // 关闭边界回弹
                    momentum: true, // 是否关闭/打开惯性滚动
                    deceleration: 0.003, // 设置滚动阻尼系数大小
                    click: true, // 禁用或开启滚动区域的点击事件
                    disablePointer:true,
                    disableTouch:false,
                    disableMouse:true
                })
            }
            scrollRef.current.on('scrollEnd', () => {
                if(scrollRef.current === null) return;
                    scrollRef.current.on("scrollEnd",() => {
                        if(!hasMore) return
                        if(scrollRef.current.maxScrollY !== scrollRef.current.y) return
                        getList(true).then(() => {})
                    })
            })
        },ref.current)
    }
    // useEffect(() => {
    //     if(scrollRef.current === null) return
    //     scrollRef.current.on("scrollEnd",() => {
    //         if(!hasMore) return
    //         if(scrollRef.current.maxScrollY !== scrollRef.current.y) return
    //         getList(true).then(() => {})
    //     })
    // },[scrollRef.current])
    const changeOrder = (order) =>{
        if(order === model.orderCol) {
            setModel({ ...model, orderDir: model.orderDir === 'asc'? 'desc' : 'asc' });
        } else {
            setModel({ ...model, orderCol: order });
        }
    }
    return (
        <ListContext.Provider value={{ model, setModel,list, }}>
            <ListUI/>
        </ListContext.Provider>
    )
}

export default List
