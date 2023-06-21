import React from 'react';

const Login = () => {

    const registerButtonHandle = () => {
        window.location.href = "http://localhost:3000/market/auth/register"
    }

    return (
        <>
            <h1>로그인</h1>
            <div>
                <input type="text" />
            </div>
            <div>
                <input type="text" />
            </div>
            <div>
                <button onClick={registerButtonHandle}>회원가입</button>
            </div>
        </>
    );
};

export default Login;