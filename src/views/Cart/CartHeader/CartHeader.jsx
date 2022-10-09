import React, { useContext } from 'react';
import style from './CartHeader.module.css';
import cartContext from "../cartContext";
import { useNavigate } from "react-router-dom";

let CartHeader = () => {
    const navigate = useNavigate();
    const { list, isEdit, setIsEdit } = useContext(cartContext)
    return (
        <>
            { list.length > 0 && (
                <>
                    <i className={`iconfont icon-fanhui ${style["return"]}`} onClick={ () => navigate(-1) }/>
                    <span className={style["header-title"]}>购物车</span>
                    <button className={style["edit"]} onClick={() => setIsEdit(!isEdit)}>{ isEdit? '完成' : '编辑' }</button>
                </>
            ) }
        </>
    )
}

export default CartHeader
