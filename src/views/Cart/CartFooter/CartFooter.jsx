import React from 'react';
import style from './CartFooter.module.css';
import cartContext from "../cartContext";
import { MiNav } from "@/components";
import CartChecked from "../CartChecked/CartChecked";


let CartFooter = () => {
    return (
        <>
            <cartContext.Consumer>
                { ({isEdit, total, isCheckedAll, batchRemove}) => (
                    isEdit ? (
                        <div className={style["bottom"]}>
                            <div className={style["checkbox-wrapper"]}>
                                <CartChecked checked={isCheckedAll}/>全选
                            </div>
                            <button className={style["transfer"]}>移入收藏夹</button>
                            <button onClick={batchRemove} className={style["remove"]}>删除</button>
                        </div>
                    ) : (
                        <div className={style["bottom"]}>
                            <div className={style["checkbox-wrapper"]}>
                                <CartChecked checked={isCheckedAll}/>全选
                            </div>
                            <div className={style["total-wrapper"]}>
                                总金额：￥
                                <span className={style["total"]}>{total}</span>.00
                            </div>
                            <button className={style["remove"]}
                            >去结算</button>
                        </div>
                    )
                ) }
            </cartContext.Consumer>
            <MiNav />
        </>
    )
}

export default CartFooter
