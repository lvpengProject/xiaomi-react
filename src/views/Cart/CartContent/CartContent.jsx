import React from "react";
import style from './CartContent.module.css';
import cartContext from "../cartContext";
import CartChecked from "../CartChecked/CartChecked";
import CartCount from "../CartCount/CartCount";

let CartContent = () => {
    return  (
        <cartContext.Consumer>
            { ({ list, setList, isEdit }) => (
                <ul className={style["list"]}>
                    { list.map((item, i) =>
                        (<li key={item.id}>
                            <CartChecked id={item.id} checked={list[i][isEdit? 'checked2' : 'checked1']} />
                            <div className={style["item-avatar"]}>
                                <img src={item.avatar} alt="" className={style["avatar"]}/>
                            </div>
                            <div className={style["item-detail"]}>
                                <div className={style["name-wrapper"]}>
                                    <span className={style["name"]}>{item.name}</span>
                                </div>
                                <div className={style["price-wrapper"]}>
                                    <span className={style["price"]}>{'￥' + item.price + '元'}</span>
                                </div>
                                <CartCount count={item.count} id={item.id} list={list} setlist={setList}/>
                            </div>
                        </li>)
                    ) }
                </ul>
            ) }
        </cartContext.Consumer>
    )
}

export default CartContent
