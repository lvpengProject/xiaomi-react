import React, { useState } from "react";
import style from './LoginUI.module.css'
import LoginPhoneUI from "./LoginPhoneUI";
import LoginUserUI from "./LoginUserUI";
import { Link,useNavigate } from "react-router-dom";
import topImg from './login-header.png';
import returnBack from './to-profile.png'

let LoginUI  = () => {
    const [loginType, setLoginType] = useState(true);
    const navigate = useNavigate();
    return (
        <div className={style["container"]}>
                <div className={style['login-top']}>
                    <img src={topImg} className={style['top-img']} alt="" />
                </div>
                <div className={style['header']}>
                    <span className={style['to-profile']}>
                        <img src={returnBack} alt="" onClick={ () => navigate(-1) } />
                    </span>
                    <span className={style['to-login']}>登录</span>
                    <Link to="/register" className={style['to-register']}>
                        <span>注册</span>
                    </Link>
            </div>
            <div className={style['content']}>
                <ul className={style['login-way']}>
                   <li onClick={() => setLoginType(true)} className={ loginType? style['active'] : '' }>卷皮账号登录</li>
                   <li onClick={() => setLoginType(false)} className={ loginType? '' : style['active'] }>手机快捷登录</li>
                </ul>
                { loginType? ( <LoginUserUI />) : (<LoginPhoneUI />) }
                <div className={style['other-login-way']}>
                    <span>第三方账号快速登录</span>
                    <div className={style['login-way-content']}>
                        <div className={style['qq']}>
                            <i className={`iconfont icon-QQ ${style['qq-login']}`} />
                        </div>
                        <div className={style['taobao']}>
                            <i className={`iconfont icon-taobao ${style['taobao-login']}`} />
                        </div>
                        <div className={style['weibo']}>
                            <i className={`iconfont icon-weibo ${style['weibo-login']}`} />
                        </div>
                    </div>
                    <ul className={style['login-way-footer']}>
                        <li>
                            <i className={`iconfont icon-baoyou`} />
                            <span>全场包邮</span>
                        </li>
                        <li>
                            <i className={`iconfont icon-zhijian`} />
                            <span>100%人工质检</span>
                        </li>
                        <li>
                            <i className={`iconfont icon-zhijian`} />
                            <span>7天放心退</span>
                        </li>
                    </ul>
                </div>
            </div>

        </div>

    )
}



export default React.memo(LoginUI)
