import React from "react";
import style from "./CategoryLeftUI.module.css";

export default ({ mainList, toggleId, activeId }) => (
        <ul className={style["left"]}>{ mainList.map(item =>
            (<li key={item.id} onClick={() => toggleId(item.id)}>
                <span className={ activeId === item.id ? style["active"] : '' }>{item.name}</span>
            </li>)
        ) }</ul>
    )
