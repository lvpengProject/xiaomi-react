import React from 'react';
import style from './AddressEdit.module.css';
import AddressContext from '../AddressContext'

let AddressEdit = () => {
    return (
        <AddressContext.Consumer>
            { ({ closeEdit, model, setModel, save }) => (
                <div className={style['container']}>
                    <div className={style['header']}>
                        <i className={`iconfont icon-fanhui ${style['return']}`} onClick={closeEdit}/>
                        <span className={style['addAddress']}>添加地址</span>
                    </div>
                    <div className={`${style['content']} hide-scroll`}>
                        <div className={style['address-content']}>
                            <div className={style['name-wrapper']}>
                                <span className={style['name']}>收件人：</span>
                                <input className={style['name']}
                                       value={model.receiveName}
                                       onInput={e => setModel({ ...model, receiveName: e.target.value }) }
                                       type="text" placeholder="请输入收件人" />
                            </div>
                            <div className={style['phone-wrapper']}>
                                <span className={style['phone']}>手机号：</span>
                                <input className={style['phone']}
                                       value={model.receivePhone}
                                       onInput={e => setModel({ ...model, receivePhone: e.target.value }) }
                                       type="text" placeholder="请输入收件人手机号" />
                            </div>
                            <div className={style['region-wrapper']}>
                                <span className={style['region']}>省/市/区：</span>
                                <input className={style['region']} type="text"
                                       value={model.receiveRegion}
                                       onInput={e => setModel({ ...model, receiveRegion: e.target.value }) }
                                       placeholder="请输入收件人省/市/区"/>
                            </div>
                            <div className={style['detail-wrapper']}>
                                <span className={style['detail']}>详细地址：</span>
                                <input className={style['detail']}
                                       value={model.receiveDetail}
                                       onInput={e => setModel({ ...model, receiveDetail: e.target.value }) }
                                       type="text" placeholder="请输入收件人的详细地址" />
                            </div>
                        </div>
                        <div className={style['perfect-information']}>
                            <div className={style['information-header']}>
                                ————<span className={style['information-header-content']}>继续完成收件人身份信息</span>————
                            </div>
                            <div className={style['information-request']}>
                                <span>
                                  据海关要求，为了确保您的商品能顺利清关，
                                  请填写真实有效的身份证信息，
                                  商家将帮您办理个人物品清关手续。
                                </span>
                            </div>
                            <div className={style['perfect-body']}>
                                <div className={style['name-wrapper']}>
                                    <span className={style['name']}>真实姓名：</span>
                                    <input type="text"/>
                                </div>
                                <div className={style['id-number']}>
                                    <span className={style['number']}>身份证号：</span>
                                    <input type="text"/>
                                </div>
                            </div>
                            <div className={style['perfect-bottom']}>
                                <i>卷皮承诺：</i>
                                <span>我们将严格保证您的身份证信息安全，使用加密、限权、水印等多种方式避免被用于其他用途。</span>
                            </div>
                        </div>
                    </div>
                    <div className={style['footer']}>
                        <button className={style['save']} onClick={save}>保存</button>
                    </div>
                </div>
            ) }
        </AddressContext.Consumer>
    )
}

export default AddressEdit
