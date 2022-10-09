import React from "react";
import style from './LoginPhoneUI.module.css';


let LoginPhoneUI = () => {
    return (
        <div className={style['login-content']}>
           <p className={style['tip']}>
               此功能暂未开放呢
           </p>
        </div>
    )

}

export default React.memo(LoginPhoneUI)
