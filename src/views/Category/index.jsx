
import React, { useState, useEffect, useMemo } from 'react';
import CategoryUI from "./CategoryUI";
import { CategoryAPI } from "@/api";
import CategoryLeftUI from "./CategoryLeftUI";
import CategoryRightUI from "./CategoryRightUI";

const Category = () => {
    let [mainList, setMainList] = useState([]);
    let [subList, setSubList] = useState([])
    let [activeId, setActiveId] = useState(0);
    const avatar = useMemo(() => {
        return activeId === 0 ? '' : mainList.find(item => item.id === activeId).avatar
    }, [activeId, mainList])
    useEffect(() => {
        (async function () {
            try {
                let list = await CategoryAPI.getAll(0)
                setMainList([...list])
                setActiveId(list[0].id)
            } catch (e) {}
        })()
    },[]);
    useEffect(() => {
        if(activeId === 0) return;
        (async function () {
            try {
                subList =  await CategoryAPI.getAll(activeId);
                setSubList([ ...subList ])
            } catch(e) {}
        })()
    },[activeId])
    const toggleId = id => setActiveId(id);
    return (
        <CategoryUI>
            <CategoryLeftUI  mainList={mainList} activeId={activeId} toggleId={toggleId}/>
            <CategoryRightUI avatar={avatar} subList={subList}/>
        </CategoryUI>
    )
}

export default Category
