import { css } from '@emotion/react';
import React from 'react';
/** @jsxImportSource @emotion/react */

const container = css`
    display: flex;
    align-items: center;
    justify-content: center;

    margin: auto;

    width: 70%;
    height: 100%;
    border: 1px solid #121212;

`;


const Main = () => {
    
    const buttonHandle = () => {
        window.location.href = "http://localhost:3000/auth/login"
    }

    const writerBoderHandle = () => {
        window.location.href = "http://localhost:3000/market/write/board"
    }
 
    return (
        <div css={container}>
            <header >
                <div >
                    로고
                    <input type="text" />
                    아이콘 
                    <button>검색</button>
                </div>
                <div >
                    <input type="checkbox" />카테고리1
                    <input type="checkbox" />카테고리2
                    <input type="checkbox" />카테고리3
                </div>
            </header>
            <main >
            <div>
                <button onClick={buttonHandle}>로그인 및 회원가입 하러가기</button> 
            </div>
            <div>
                <button onClick={writerBoderHandle}>글쓰기</button>
            </div>
            </main>
        </div>
    );
};

export default Main;