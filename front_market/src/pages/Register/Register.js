import axios from 'axios';
import React, { useState } from 'react';
import AuthInput from '../../components/AuthInput/AuthInput';

const Register = () => {
    const [ registerUser, setRegisterUser ] = useState({username: "", password: "", checkPassword: "", name: "", phone:"", temperature: "36.5"})
    const [ errorMessages, setErrorMessages ] = useState({username: "", password: "", checkPassword: "", name: "", phone: ""});
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
            alert("회원가입 완료!")
            window.location.replace("http://localhost:3000/market")
        } catch(error) {
            setErrorMessages({username: "", password: "", checkPassword: "", name: "", phone:"", ...error.response.data.errorData});
        }
    }

    const onClickLoginButton = () => {
        
        window.location.replace("http://localhost:3000/market/home")
    }

    return (
        <>
        <div>
            <h1>회원가입</h1>

            <main >
                <label >username</label>
                <AuthInput type="text" onChange={onChangeInputHandle} name="username" placeholder="ID를 입력하세요"/>
                <div >{errorMessages.username}</div>

                <label >Password</label>
                <AuthInput type="password" onChange={onChangeInputHandle} name="password" placeholder="비밀번호를 입력하세요"/>
                <div >{errorMessages.password}</div>

                <label >CheckPassword</label>
                <AuthInput type="password" onChange={onChangeInputHandle} name="checkPassword" placeholder="비밀번호를 확인하세요"/>
                <div >{errorMessages.password}</div>

                <label >name</label>
                <AuthInput type="text" onChange={onChangeInputHandle} name="name" placeholder="성함을 입력하세요."/>
                <div >{errorMessages.name}</div>
                
                <label >phone</label>
                <AuthInput type="text" onChange={onChangeInputHandle} name="phone" placeholder="하이픈(-)제외 입력하세요. (가입 후 변경불가)"/>
                <div >{errorMessages.phone}</div>

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