import React, {memo, useRef, useState, useEffect} from "react";
import style from './LoginUserUI.module.css';
import EventEmitter from './loginEmitter';

let LoginUserUI = () => {
    const inputRef = useRef(null)
    useEffect(() => {
        inputRef.current.focus()
    },[])
    const [model, setModel] = useState({
        name: '',
        pwd: ''
    })
    return (
        <div className={style['login-content']}>
            <div className={style['account-wrapper']}>
                <input
                    type="text"
                    placeholder="手机号/邮箱/用户名"
                    value={model.name}
                    ref={inputRef}
                    onInput={e => setModel({ ...model, name: e.target.value })}
                />
            </div>
            <div className={style['pwd-wrapper']}>
                <input
                    type="password"
                    value={model.pwd}
                    onInput={e => setModel({ ...model, pwd: e.target.value })}
                    placeholder="密码" />
            </div>
            <div className="login">
                <input type="button" value="登 录"
                       onClick={() => EventEmitter.emit('user', model)}
                       className={style['login-gray']} />
            </div>
            <div className={style['login-content-bottom']}>
                <div className={style['left']}>
                    <i />
                <span>两周内免登陆</span>
            </div>
            <div className={style['right']}>忘记密码？</div>
        </div>
        </div>
    )
}

export default memo(LoginUserUI)
