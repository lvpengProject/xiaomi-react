
import React, { useState, useEffect,useMemo } from 'react';
import cartContext from "./cartContext";
import Layout from "./Layout/Layout";
import {CartAPI} from "../../api";

const Cart = () => {
    const [list, setList] = useState([]);
    const [isEdit, setIsEdit] = useState(false);
    useEffect(() => {
        if(!sessionStorage.getItem('token')) return;
        (async () => {
           try {
               let products = await CartAPI.get();
               products.forEach(item => {
                   item.checked1 = true;
                   item.checked2 = false;
               })
               setList( [...products] );
           }catch (e) {}
        })()
    },[]);
    const isCheckedAll = useMemo(() => {
        return list.every(item => item[isEdit? "checked2" : 'checked1'])
    }, [list, isEdit]);
    // 总金额
    let total = useMemo(() => {
        let total = 0
        list.forEach((item,index) => {
            if (item.checked1) {
                total += list[index].count * list[index].price
            }
        })
        return total;
    }, [list]);
    const toggle = id => {
        let i = list.findIndex(item => item.id === id);
        list[i][isEdit? 'checked2' : 'checked1'] = !list[i][isEdit? 'checked2' : 'checked1'];
        setList([...list]);
    };
    const toggleAll = () => {
        let t = isCheckedAll;
        list.forEach(item => {
            item[isEdit? 'checked2' : 'checked1'] = !t
        });
        setList([...list])
    };
    const decreaseHandler = async (id) => {
        list.find(item => item.id === id).count --
        await CartAPI.decrease(id)
        setList([...list])
    };
    const increaseHandler = async (id) => {
        list.find(item => item.id === id).count ++;
        await CartAPI.increase(id)
        setList([...list])
    };
    const batchRemove = async () => {
        if(!window.confirm('确定删除？')) return;
        let ids  = list.reduce((ids,item) => {
            if(item.checked2) ids.push(item.id)
            return ids
        },[]);
        await CartAPI.remove(ids);
        for(let i = 0; i < list.length;) {
            if(list[i].checked2) {
                list.splice(i, 1);
            } else {
                i++;
            }
        }
        setList([...list]);
    };

    return (
            <cartContext.Provider value={{
                list, setList, isEdit, setIsEdit, toggle,
                decreaseHandler, increaseHandler,
                toggleAll, total, isCheckedAll,batchRemove
            }}>
                <Layout />
            </cartContext.Provider>
    )
}

export default Cart
