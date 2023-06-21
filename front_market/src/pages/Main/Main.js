import React from 'react';

const Main = () => {
    
    const buttonHandle = () => {
        window.location.href = "http://localhost:3000/market/auth/login"
    }
 
    return (
        <div>
            메인페이지
            <button onClick={buttonHandle}>로그인 및 회원가입 하러가기</button>
        </div>
    );
};

export default Main;