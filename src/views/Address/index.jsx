
import React, { useState, useEffect } from 'react';
import AddressContext from "./AddressContext";
import AddressLayout from "./AddressLaout/AddressLayout";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { AddressActions } from '@/store';
import {ActionsAddress} from "../../store";

const Address = ({ list, init, add, update, remove, isDefault }) => {
    const [isEdit, setIsEdit] = useState(false);
    const navigate = useNavigate()
    const [model, setModel] = useState({
        id: 0,receiveName: '', receivePhone: '', receiveRegion: '', receiveDetail: ''
    })
    useEffect(() => {
        init();
    }, []);
    const setDefault = async (id) => {
        isDefault(id)
    };
    const removeHandler = async (id) => {
        if(!window.confirm('确定要删除吗？')) return;
        remove(id)
    };
    const beginAdd = () => {
        model.id = 0;
        model.receiveName = '';
        model.receiveRegion = '';
        model.receiveDetail = '';
        model.receivePhone = '';
        setIsEdit(true)
    };
    const beginUpdate = (data) => {
        model.id = data.id;
        model.receiveName = data.receiveName;
        model.receiveRegion = data.receiveRegion;
        model.receiveDetail = data.receiveDetail;
        model.receivePhone = data.receivePhone;
        setIsEdit(true)
    };
    const closeEdit = () => setIsEdit(false);
    const save = async () => {
        if(model.id === 0) {
           add(model)
        } else {
            update(model)
        }
        setIsEdit(false)
        alert('编辑成功！')
    };
    const returnBack = () => {
        navigate(-1);
    }
    return (
       <AddressContext.Provider value={{
           list, returnBack, isEdit, setIsEdit, beginAdd, beginUpdate, closeEdit,
           model,save, setModel, removeHandler, setDefault
       }}>
           <AddressLayout />
       </AddressContext.Provider>
    )
}
const mapStateToProps = (state) => ({
    list: state.address.list
});
const mapDispatchToProps = (dispatch) => ({
    init: () =>  dispatch(ActionsAddress.init()),
    add: (model) => dispatch(ActionsAddress.add(model)),
    update: (model) =>  dispatch(ActionsAddress.update(model)),
    remove: (model) => dispatch(ActionsAddress.remove(model)),
    isDefault: (model) => dispatch(ActionsAddress.setDefault(model))
})
export default connect(mapStateToProps, mapDispatchToProps)(Address)
