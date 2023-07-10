import React, { useEffect, useState } from 'react';
/** @jsxImportSource @emotion/react */
import { BsPlusCircleFill } from 'react-icons/bs';
import Board from '../../components/Board/Board';
import * as s from './Style';
import { useQuery } from 'react-query';
import axios from 'axios';
import WriteBoardLocationCategory from '../../components/LocationCategory/WriteBoardLocationCategory';
import { Navigate } from 'react-router-dom';

const Main = () => {
    const [ selectedCategories, setSelectedCategories ] = useState([]);
    const [ loginAndRegisterButtonFlag, setLoginAndRegisterButtonFlag ] = useState(true);
    const [ nationWideDetailFlag, setNationWideDetailFlag ] = useState(false);
    const [ selectedNationWideName, setSelectedNationWideName ] = useState("");
    const [ getAddressFlag, setGetAddressFlag ] = useState(false);
    const [ region, setRegion ] = useState({nationWideDetailId: ""});
    const [ getBoardFlag, setGetBoardFlag ] = useState(true); 
    const [ regionBoardFlag, setRegionBoardFlag ] = useState(false);
   
    useEffect(() => {
        checkLogin();
    }, [])


    const getBoards = useQuery(["getBoards"], async() => {
        const option = {
            headers : {
                Authorization: `Bearer ${localStorage.getItem("accessToken")}`
            },
            params: {
                region: region.nationWideDetailId
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

    const getNationWide = useQuery(["getNationWide"],async() => {
        const option = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("accessToken")}`
            },
            params : {
                nationWide: selectedNationWideName
            }
        }
        
        const response = await axios.get("http://localhost:8080/market/region/detail", option);
        
        return response
    }, {
        enabled: nationWideDetailFlag,
        onSuccess: () => {
            setSelectedNationWideName("");
            setNationWideDetailFlag(false);
        }
    });

    // const getRegionCategorySelect = useQuery(["getRegionCategorySelect"], async() => {
    //     const option = {
    //         headers: {
    //             Authorization : `Bearer ${localStorage.getItem("accessToken")}`
    //         },
    //         params: {
    //             region: region.nationWideDetailId
    //         }
    //     }

    //     const response = await axios.get("http://localhost:8080/main/board/region", option);
    //     console.log(response)
    //     return response
    // },{
    //     enabled: regionBoardFlag,
    //     onSuccess: () => {
    //         setRegionBoardFlag(false);
    //     }
    // })

    const buttonHandle = () => {
        window.location.href = "http://localhost:3000/auth/login"
    }

    const writerBoderHandle = () => {
        if(localStorage.getItem("accessToken") === null){
            alert("로그인이 필요합니다.");
            window.location.href = "http://localhost:3000/auth/login"
        }else{
            window.location.href = "http://localhost:3000/market/write/board"
        }
    }

    const contentOnChangeHandle = (e) => {
        setGetAddressFlag(true);
        const { name, value } = e.target;
        setRegion({ ...region, [name]: value });
        setGetBoardFlag(true);
    }  

    const readAllButtonHandle = () => {
        window.location.reload();
    }

    const checkLogin = () => {
        if(!!localStorage.getItem("accessToken")){
            setLoginAndRegisterButtonFlag(false);
        }
    }

    console.log(region)
    return (
        <div css={s.mainPageContainer}>
            <header css={s.headerContainer} >
                <div css={s.logoAndSearchBar}>
                    <div css={s.searchBarAndSearchButton}>
                        <input type="text" placeholder="썩당마켓" css={s.searchBar}/>
                        <button css={s.searchButton}>검색 아이콘</button>   
                    </div>
                    <button css={s.readAllBoardButton} onClick={readAllButtonHandle}>전체 글 보기</button>
                    <WriteBoardLocationCategory setSelectedNationWideName={setSelectedNationWideName} setNationWideDetailFlag={setNationWideDetailFlag}/>                      
                        <div css={s.locationDetailContainer}>
                        {getNationWide.isLoading ? "" : getNationWide.data !== undefined ? getNationWide.data.data.map(nationWide => (
                        <div css={s.locationDetail}  key={nationWide.nationWideDetailId}>
                            <button onClick={contentOnChangeHandle} id={nationWide.nationWideDetailId} value={nationWide.nationWideDetailId} name='nationWideDetailId'>{nationWide.nationWideDetailName}</button>
                        </div>))
                    : ""}
            </div>
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