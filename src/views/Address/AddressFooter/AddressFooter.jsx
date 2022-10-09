import React from 'react';
import style from './AddressFooter.module.css';
import AddressContext from "../AddressContext";


let AddressFooter = () => {
    return (
        <AddressContext.Consumer>
            { ({ beginAdd }) => (
                <>
                    <button className={style["add-new"]} onClick={() => beginAdd()}>添加新地址</button>
                </>
            ) }
        </AddressContext.Consumer>
    )
}

export default AddressFooter
