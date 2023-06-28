import React, { useEffect, useState } from 'react';
/** @jsxImportSource @emotion/react */
import { BsPlusCircleFill } from 'react-icons/bs';
import Board from '../../components/Board/Board';
import * as s from './Style';
import { useQuery } from 'react-query';
import axios from 'axios';

const Main = () => {
    const [ selectedCategories, setSelectedCategories ] = useState([]);
    const [ loginAndRegisterButtonFlag, setLoginAndRegisterButtonFlag ] = useState(true);
  
    useEffect(() => {
        checkLogin();
    }, [])

    const [ getBoardFlag, setGetBoardFlag ] = useState(true); 

    const getBoards = useQuery(["getBoards"], async() => {
        const option = {
            headers : {
                Authorization: `Bearer ${localStorage.getItem("accessToken")}`
            }
        }

        const response = await axios.get("http://localhost:8080/main/board", option)
        console.log(response.data)
        return response;
    }, {
        enabled: getBoardFlag,
        onSuccess: () => {
            setGetBoardFlag(false);
        }
    })
   

    const readBoardHandle = () => {
        // navigate("/book/" + book.bookId);
    }

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
            <main css={s.mainLoginContainer} >
                <div css={s.loginAndRegisterContainer}>
                    {loginAndRegisterButtonFlag ? (<button onClick={buttonHandle}>로그인 및 회원가입 하러가기</button> 
                    ) : (<div>로그인됐으니 추천상품/ 최근본상품 띄워주면 될듯</div>)}
                </div>
                {getBoards.isLoading ? "" : getBoards.data !== undefined ? getBoards.data.data.map(board => (
                <Board key={board.boardId} board={board}/>))
                : ""}
            </main>
            <div css={s.writeBoard}>
                <button css={s.writeBoardButton} onClick={writerBoderHandle}>글쓰기<BsPlusCircleFill/></button>
            </div>
        </div>
    );
};

export default Main;