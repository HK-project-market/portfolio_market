import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './Style';
const Main = () => {
    
    const buttonHandle = () => {
        window.location.href = "http://localhost:3000/auth/login"
    }

    const writerBoderHandle = () => {
        window.location.href = "http://localhost:3000/market/write/board"
    }
 
    return (
        <div css={s.mainPageContainer}>
            <header css={s.headerContainer} >
                <div css={s.logoAndSearchBar}>
                    <div css={s.logo}>
                        로고
                    </div>
                    <div css={s.searchBarAndSearchButton}>
                        <input type="text" css={s.searchBar}/>
                        <button css={s.searchButton}>검색 아이콘</button>   
                    </div>
                </div>
                <div >
                    <input type="checkbox" />카테고리1
                    <input type="checkbox" />카테고리2
                    <input type="checkbox" />카테고리3
                </div>
            </header>
            <main css={s.mainLoginContainer}>
                <div css={s.board}>
                    <div css={s.boardImg}>
                        사진
                    </div>
                    <div css={s.boardTitle}>
                        제목
                    </div>
                    <div>
                        내용
                        
                    </div>
                    <div>
                        가격
                    </div>
                </div>
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