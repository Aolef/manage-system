import React, { useEffect, useState } from "react";
import { Input, Button } from "antd";
import MyStorage from "../../common/MyStorage";
import { useNavigate } from "react-router-dom";
import './login.scss'
import { checkUserIsLogin } from "../../common/utils";
import { images } from "../../assets/images";

export default function Login() {
    let navigate = useNavigate();
    const [loginData, setLoginData] = useState({
        userName: '',
        password: ''
    })
    useEffect(() => {
        // console.log("enter login page")
        // let islogin = checkUserIsLogin()
        // console.log("islogin",islogin)
        // if(islogin) navigate("/")
    },[])
    function setUserName(e) {
        let value = e.target.value
        setLoginData((data) => ({
            ...data,
            userName: value
        }))
    }
    function setPassword(e) {
        let value = e.target.value
        setLoginData((data) => ({
            ...data,
            password: value
        }))
    }
    function login() {
        MyStorage.setItem("Authorization","validToken")
        navigate("/")
    }
    return <div className="" style={{
        width: '100%',
        height: '100%',
        backgroundImage: `url(${images.loginbg})`,
        backgroundSize: '100% 100%'
    }}>
        <div style={{
            width: 500,
            height: 500,
            background: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            position: 'absolute',
            right: 70,
            bottom: 60,
            borderRadius: 10
        }}>
            <div>登录</div>
            <Input onChange={setUserName}></Input>
            <Input.Password onChange={setPassword}></Input.Password>
            <Button onClick={login}>login</Button>
        </div>
    </div>
}