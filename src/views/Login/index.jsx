
import React, { useEffect } from 'react';
import { UserAPI } from "@/api";
import LoginUI from './LoginUI';
import EventEmitter from './loginEmitter';
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()
    useEffect(() => {
        const login = async (model) => {
            const token = await UserAPI.login(model);
            sessionStorage.setItem('token', token);
            sessionStorage.setItem('name', model.name);
            navigate('/',{ replace: true })
        }
        EventEmitter.on('user', login)
        return () => EventEmitter.removeListener('user', login)
    },[])
    return (
            <LoginUI />
       )
}

export default Login
