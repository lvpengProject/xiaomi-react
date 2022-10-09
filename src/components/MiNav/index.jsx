
import React from "react";
import style from './index.module.css'
import { NavLink } from "react-router-dom";

const MiNav = () => {
    return (
        <ul className={style['mi-nav']}>
            <li>
                <NavLink className={({isActive}) => isActive? style['active'] : ''} to="/home">
                    <i></i>
                    <span>首页</span>
                </NavLink>
            </li>
            <li>
                <NavLink className={({isActive}) => isActive? style['active'] : ''} to="/category">
                    <i></i>
                    <span>分类</span>
                </NavLink>
            </li>
            <li>
                <NavLink className={({isActive}) => isActive? style['active'] : ''} to="/cart">
                    <i></i>
                    <span>购物车</span>
                </NavLink>
            </li>
            <li>
                <NavLink className={({isActive}) => isActive? style['active'] : ''} to="/profile">
                    <i></i>
                    <span>我的</span>
                </NavLink>
            </li>
        </ul>
    )
}

export default React.memo(MiNav)
