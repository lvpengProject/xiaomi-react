import React from "react";
import style from './AddressLayout.module.css';
import AddressHeader from "../AddressHeader/AddressHeader";
import AddressContent from "../AddressContent/AddressContent";
import AddressFooter from "../AddressFooter/AddressFooter";
import AddressContext from "../AddressContext";
import AddressEdit from "../AddressEdit/AddressEdit";

let AddressLayout = () => {

    return(
        <AddressContext.Consumer>
            { ({isEdit}) => (
                isEdit? (<AddressEdit/>) : (
                    <div className={style["container"]}>
                        <div className={style["header"]}>
                            <AddressHeader />
                        </div>
                        <div className={`${style["content"]} hide-scroll`}>
                            <AddressContent />
                        </div>
                        <div className={style["footer"]}>
                            <AddressFooter/>
                        </div>
                    </div>
                )
            ) }
        </AddressContext.Consumer>
    )
}
export default AddressLayout
