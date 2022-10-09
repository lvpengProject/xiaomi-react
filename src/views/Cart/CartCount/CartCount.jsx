import React from "react";
import style from './CartCount.module.css';
import cartContent from "../cartContext";


let CartCount = ({count,id}) => {

    return (
       <cartContent.Consumer>
           { ({ decreaseHandler,increaseHandler }) => (
              <div>
                  <button className={style["decrease"]} onClick={ () => decreaseHandler(id) } disabled={count === 1}>-</button>
                  <span className={style["count"]}>{count}</span>
                  <button className={style["increase"]} onClick={ () => increaseHandler(id) } disabled={count === 5}>+</button>
              </div>
           ) }
       </cartContent.Consumer>
    )
}
export default CartCount
