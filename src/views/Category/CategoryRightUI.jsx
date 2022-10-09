import React, { Fragment } from 'react';
import { Link } from "react-router-dom";
import style from "./CategoryRightUI.module.css";

export default ({ subList,avatar  }) => (
    <Fragment>
        <img src={avatar} alt=""/>
        { subList.length > 0? ( <ul className={style["right"]}>{ subList.map(item =>
            (<li key={item.id}>
                <Link to={`/list/${item.id}`}>
                    <img src={item.avatar} alt=""/>
                    <span>{item.name}</span>
                </Link>
            </li>)
        ) }</ul>) : (<p className={style["tip"]}>敬请期待</p>) }
    </Fragment>
)
