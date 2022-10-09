// 展示组件
import React from "react";
import { MiNav } from '@/components';
import style from './CategoryUI.module.css';

export default (props) => (
        <div className={style["container"]}>
            <div className={style["header"]}>

            </div>
            <div className={style["content"]}>
                <div className={`${style["left"]} hide-scroll`}>
                    { props.children[0] }
                </div>
                <div className={`${style["right"]} hide-scroll`}>
                    { props.children[1] }
                </div>
            </div>
            <div className={style["footer"]}>
                <MiNav/>
            </div>
        </div>
    )
