import React from 'react';
import style from './AddressHeader.module.css';
import AddressContext from "../AddressContext";


let AddressHeader = () => {
    return(
        <AddressContext.Consumer>
            { ({ returnBack }) => (
                <>
                    <i className={ `iconfont icon-fanhui ${style["return"]}` } onClick={returnBack  }/>
                    <span className={style["address-title"]}>收货地址</span>
                </>
            ) }
        </AddressContext.Consumer>

    )
}

export default AddressHeader
