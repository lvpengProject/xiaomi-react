import React, { useContext } from 'react';
import style from './CartChecked.module.css';
import cartContext from "../cartContext";

let CartChecked = ({id, checked}) => {
    const { toggle, toggleAll } = useContext(cartContext)
    return (
                <i className={`${style["checkbox"]} 
                ${checked ? style["checked"] : ''} `}
                onClick={() => id ? toggle(id) : toggleAll()}/>
    )
}

export default CartChecked
