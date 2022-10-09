import React from "react";
import style from './AddressContent.module.css';
import AddressContext from "../AddressContext";


let AddressContent = () => {
    return (
        <AddressContext.Consumer>
            { ({list, setDefault, removeHandler, beginUpdate}) => (
                <ul className={style["list"]}>
                    { list.map(item => (
                        <li key={item.id}>
                            <div className={style["address-wrapper"]}>
                                <span className={style["name"]}>{item.receiveName}</span>
                                <span className={style["phone"]}>{item.receivePhone}</span>
                                <div className={style["region-wrapper"]}>
                                    <span className={style['region']}>{item.receiveRegion}</span>
                                    <span className={style['detail']}>{item.receiveDetail}</span>
                                </div>
                            </div>
                            <div className={style['is-default-wrapper']}>
                                <div className={style["left"]}>
                                    <img src="CheckBox-1.png"
                                         onClick={() => setDefault(item.id)}
                                         className={` ${style['default']} ${item.isDefault === 1? style['active'] : ''}`} alt=""/>
                                    <span className={style["is-default"]} onClick={() => setDefault(item.id)}>默认地址</span>
                                </div>
                                <div className={style["right"]}>
                                    <i className={`iconfont icon-bianji ${style["edit"]}`} onClick={() => beginUpdate(item)}/>
                                    <span className={style["edit"]} onClick={() => beginUpdate(item)}>编辑</span>
                                    <i className={`iconfont icon-shanchu ${style["remove"]}`} onClick={() => removeHandler(item.id)}/>
                                <span className={style["remove"]} onClick={() => removeHandler(item.id)}>删除</span>
                                </div>
                            </div>
                        </li>
                    )) }
                </ul>
            ) }
        </AddressContext.Consumer>
    )
}

export default AddressContent
