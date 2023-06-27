import React, { useEffect, useState } from 'react';
/** @jsxImportSource @emotion/react */
import LocationCategory from '../../components/LocationCategory/LocationCategory';
import * as s from './Style';
import { BsPlusCircleFill } from 'react-icons/bs';

const Main = () => {
    const [ selectedCategories, setSelectedCategories ] = useState([]);
    const [ loginAndRegisterButtonFlag, setLoginAndRegisterButtonFlag ] = useState(true);
    
    useEffect(() => {
        checkLogin();
    }, [])

    const buttonHandle = () => {
        window.location.href = "http://localhost:3000/auth/login"
    }

    const writerBoderHandle = () => {
        window.location.href = "http://localhost:3000/market/write/board"
    }

    const checkLogin = () => {
        if(!!localStorage.getItem("accessToken")){
            setLoginAndRegisterButtonFlag(false);
        }
    }

    return (
        <div css={s.mainPageContainer}>
            <header css={s.headerContainer} >
                <div css={s.logoAndSearchBar}>
                    <div css={s.logo}>
                        썩당마켓
                    </div>
                    <div css={s.searchBarAndSearchButton}>
                        <input type="text" css={s.searchBar}/>
                        <button css={s.searchButton}>검색 아이콘</button>   
                    </div>
                        {/* <LocationCategory selectedCategories={selectedCategories} setSelectedCategories={setSelectedCategories}/> */}
                </div>
            </header>
            <main >
                <div css={s.loginAndRegisterContainer}>
                    {loginAndRegisterButtonFlag ? (<button onClick={buttonHandle}>로그인 및 회원가입 하러가기</button> 
                    ) : (<div>로그인됐으니 추천상품/ 최근본상품 띄워주면 될듯</div>)}
                </div>
                <div css={s.mainLoginContainer}>
                    <div css={s.boardImg}>
                        사진
                    </div>
                    <div css={s.board}>
                        <div css={s.boardTitle}>
                            노트북 팔아요 (그지새끼마냥 네고할생각X)노트북 팔아요 
                        </div>
                        <div css={s.boardContent}>
                            노트북 판다~ 30년된 노트북이다 어쩌고저쩌꼬 솰라솰라
                            (여기 내용은 DB에서 가져와야징) 노트북 판다~ 30년된 노트북이다 어쩌고저쩌꼬 솰라솰라
                            (여기 내용은 DB에서 가져와야징)er 노트북 판다~ 30년된 노트북이다 어쩌고저쩌꼬 솰라솰라
                            (여기 내용은 DB에서 가져와야징)er 노트북 판다~ 30년된 노트북이다 어쩌고저쩌꼬 솰라솰라
                            (여기 내용은 DB에서 가져와야징)er 노트북 판다~ 30년된 노트북이다 어쩌고저쩌꼬 솰라솰라
                            (여기 내용은 DB에서 가져와야징)er 노트북 판다~ 30년된 노트북이다 어쩌고저쩌꼬 솰라솰라
                            (여기 내용은 DB에서 가져와야징)er
                        </div>
                        <div css={s.price}>
                            300,000원
                        </div>
                        <div css={s.address}>
                            서울특별시
                        </div>
                    </div>
                </div>
                <div css={s.mainLoginContainer}>
                    <div css={s.boardImg}>
                        사진
                    </div>
                    <div css={s.board}>
                        <div css={s.boardTitle}>
                            노트북 팔아요 (네고할생각X)노트북 팔아요 
                        </div>
                        <div css={s.boardContent}>
                            노트북 판다~ 30년된 노트북이다 어쩌고저쩌꼬 솰라솰라
                            (여기 내용은 DB에서 가져와야징) 노트북 판다~ 30년된 노트북이다 어쩌고저쩌꼬 솰라솰라
                            (여기 내용은 DB에서 가져와야징)er 노트북 판다~ 30년된 노트북이다 어쩌고저쩌꼬 솰라솰라
                            (여기 내용은 DB에서 가져와야징)er 노트북 판다~ 30년된 노트북이다 어쩌고저쩌꼬 솰라솰라
                            (여기 내용은 DB에서 가져와야징)er 노트북 판다~ 30년된 노트북이다 어쩌고저쩌꼬 솰라솰라
                            (여기 내용은 DB에서 가져와야징)er 노트북 판다~ 30년된 노트북이다 어쩌고저쩌꼬 솰라솰라
                            (여기 내용은 DB에서 가져와야징)er
                        </div>
                        <div css={s.price}>
                            300,000원
                        </div>
                        <div css={s.address}>
                            서울특별시
                        </div>
                    </div>
                </div>
            </main>
            <div css={s.writeBoard}>
                <button css={s.writeBoardButton} onClick={writerBoderHandle}>글쓰기<BsPlusCircleFill/></button>
            </div>
        </div>
    );
};

export default Main;