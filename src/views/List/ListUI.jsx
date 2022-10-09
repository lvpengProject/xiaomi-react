import React, {useContext} from 'react';
import style from './ListUI.module.css';
import {Link} from "react-router-dom";
import ListContext from "./listContext";

let ListUI = () => {
    const { model, setModel, list } = useContext(ListContext);

    return (
        <div className={style["container"]}>
            <div className={style['header']}>
                <Link to="/category">
                    <i className={`${style["return"]} iconfont icon-fanhui`}/>
                </Link>
                <input type="text" value={model.name} onInput={e => setModel({ ...model, name: e.target.value }) }/>
            </div>
            <div className={style["order"]}>
                <span className={`${model.orderCol === 'price' ? style["active"] : ''}`} >
                    价格
                <i className={ `iconfont icon-${model.orderDir}` }/>
                </span>
                <span className={`${model.orderCol === 'sale' ? style["active"] : ''}`}>
                    销量
                <i className={ `iconfont icon-${model.orderDir}` }/>
                </span>
                <span className={`${model.orderCol === 'rate' ? style["active"] : ''}`}>
                    好评
                <i className={ `iconfont icon-${model.orderDir}` }/>
                </span>
            </div>
            <div className={style['content']}>
                <div>
                    <ul className={style["list"]}>
                        { list.map(item =>
                            (<li key={item.id}>{
                                <Link to={`/detail/${item.id}`}>
                                    <img src={item.avatar} alt=""/>
                                    <div className={style["item-detail"]}>
                                        <div className={style["price-wrapper"]}>
                                        <span className={style["price"]}>
                                            { "￥" + item.price }
                                        </span>
                                            <span className={style["original-price"]}>￥499</span>
                                        </div>
                                        <div className={style["name-wrapper"]}>
                                            <span className={item.name}>{item.name}</span>
                                        </div>
                                    </div>
                                </Link>
                            }</li>)
                        ) }
                    </ul>
                    <p>{1}</p>
                </div>
            </div>
        </div>
    )
}
export default ListUI
