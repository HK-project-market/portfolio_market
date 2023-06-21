import axios from 'axios';
import React, { useState } from 'react';
import AuthInput from '../../components/AuthInput/AuthInput';

const Register = () => {
    const [ registerUser, setRegisterUser ] = useState({email: "", password: "", checkPassword: "", address: "", temperature: "36.5"})
    const [ errorMessages, setErrorMessages ] = useState({email: "", password: "", name: "", phone: ""});

    const onChangeInputHandle = (e) => {
        const { name, value } = e.target;
        setRegisterUser({...registerUser, [name]: value});
    }

    const submitRegisterHandle = async () => {
        const data = {
            ...registerUser
        }
        const option = {
            headers: {
                "Content-Type": "application/json"
            }
        }
        try {
            await axios.post("http://localhost:8080/auth/signup", JSON.stringify(data), option);
        } catch(error) {
            setErrorMessages({email: "", password: "", name: "", phone:"", ...error.response.data.errorData});
        }
    }

    const onClickLoginButton = () => {
        window.location.replace("http://localhost:3000/auth/login")
    }

    console.log(errorMessages.email)

    return (
        <>
        <div>
            <h1>회원가입</h1>

            <main >
                <label >Email</label>
                <AuthInput type="email" onChange={onChangeInputHandle} name="email" />
                <div >{errorMessages.email}</div>

                <label >Password</label>
                <AuthInput type="password" onChange={onChangeInputHandle} name="password" />
                <div >{errorMessages.password}</div>

                <label >CheckPassword</label>
                <AuthInput type="password" onChange={onChangeInputHandle} name="checkPassword" />
                <div >{errorMessages.password}</div>

                <label >Address</label>
                <AuthInput type="text" onChange={onChangeInputHandle} name="address" />
                <div >{errorMessages.address}</div>

                <label >Temperature</label>
                <p>36.5</p>
            </main>

            <footer >
                <button  onClick={submitRegisterHandle}>회원가입</button>
                <button  onClick={onClickLoginButton}>로그인</button>
            </footer>
        </div>
        </>
    );
};

export default Register;