import React, { useEffect, useState } from "react";
import { Input, Button } from "antd";
import MyStorage from "../../common/MyStorage";
import { useNavigate } from "react-router-dom";
import './login.scss'
import { checkUserIsLogin } from "../../common/utils";

export default function Login() {
    let navigate = useNavigate();
    const [loginData, setLoginData] = useState({
        userName: '',
        password: ''
    })
    useEffect(() => {
        console.log("enter login page")
        let islogin = checkUserIsLogin()
        console.log("islogin",islogin)
        if(islogin) navigate("/")
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
    return <div className="">
        <div style={{
            width: 500,
            height: 500,
            background: 'blue'
        }}>
            <Input onChange={setUserName}></Input>
            <Input.Password onChange={setPassword}></Input.Password>
            <Button onClick={login}>login</Button>
        </div>
    </div>
}