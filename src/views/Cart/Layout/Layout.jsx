import React from "react";
import CartHeader from "../CartHeader/CartHeader";
import CartContent from "../CartContent/CartContent";
import CartFooter from "../CartFooter/CartFooter";
import style from './Layout.module.css';

let Layout = () => {
    return (
        <div className={style["container"]}>
            <div className={style["header"]}>
                <CartHeader/>
            </div>
            <div className={`${style["content"]} hide-scroll`}>
                <CartContent />
            </div>
            <div className={style["footer"]}>
                <CartFooter />
            </div>
        </div>
    )
}
export default React.memo(Layout)
