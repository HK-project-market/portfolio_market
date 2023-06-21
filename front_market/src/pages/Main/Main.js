import React from 'react';

const Main = () => {
    
    const buttonHandle = () => {
        window.location.href = "http://localhost:3000/market/auth/login"
    }
 
    return (
        <div>
            <header>
                <div>
                    로고
                    <input type="text" />
                    아이콘 
                    <button>검색</button>
                </div>
                <div>
                    <input type="checkbox" />카테고리1
                    <input type="checkbox" />카테고리2
                    <input type="checkbox" />카테고리3
                </div>
            </header>
            <main>
            <div>
                <button onClick={buttonHandle}>로그인 및 회원가입 하러가기</button> 
            </div>
            </main>
        </div>
    );
};

export default Main;