import axios from 'axios';
import React, { useState } from 'react';
import { useMutation, useQuery } from 'react-query';
/** @jsxImportSource @emotion/react */
import WriteBoardLocationCategory from '../../components/LocationCategory/WriteBoardLocationCategory';
import * as s from './Style';



const WriteBoard = () => {
    const [ selectedNationWideName, setSelectedNationWideName ] = useState("");
    const [ nationWideDetailFlag, setNationWideDetailFlag ] = useState(false);
    const [ getAddressFlag, setGetAddressFlag ] = useState(false);
    const [ boardContent, setBoardContent ] = useState({title: "", content: "", price: "", nationWideDetailId: "" , categoryId: ""});
    const [ writeBoardFlag, setWriteBoard ] = useState(false);
    const [ getCategoryFlag, setGetCategoryFlag ] = useState(true);

    const contentOnChangeHandle = (e) => {
        setGetAddressFlag(true);
        const { name, value } = e.target;
        setBoardContent({ ...boardContent, [name]: value });
    }  

    const insertBoardContent = useMutation(async() => {
        const option = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("accessToken")}`
            }
        }
        try{
            await axios.post("http://localhost:8080/market/write/board", JSON.stringify(boardContent), option);
            alert("등록완료~")
            window.location.replace('http://localhost:3000/auth/home');
        }catch(error){
            alert("등록실패")
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

    const getAddress = useQuery(["getAddress"], async() => {
        const option = {
            headers : {
                Authorization: `Bearer ${localStorage.getItem("accessToken")}`
            },
            params: {
                nationWideDetailId: boardContent.nationWideDetailId
            }
        }

        const response = await axios.get("http://localhost:8080/market/address", option)

        return response
       
    }, {
        enabled: getAddressFlag,
        onSuccess: () => {
            setGetAddressFlag(false);
            setWriteBoard(true);
        }
    })

    const getCategory = useQuery(["getCategory"], async() => {
        const option = {
            headers : {
                Authorization: `Bearer ${localStorage.getItem("accessToken")}`
            }
        }

        const response = await axios.get("http://localhost:8080/market/category", option)
        
        return response
    }, {
        enabled: getCategoryFlag,
        onSuccess: () => {
            setGetCategoryFlag(false);
        }
    })

    const writeBoardSaveHandle = () => {
        if(!insertBoardContent.isLoading){
            insertBoardContent.mutate();
        }
    }  

    if(getNationWide.isLoading){
        return <div>로딩중</div>
    }

    if(getAddress.isLoading){
        return <div>로딩중</div>
    }

    console.log(writeBoardFlag)
    console.log(boardContent)
    return (
        <div css={s.WriteBoardContainer}>
            <header css={s.headerContainer}>
                주소를 먼저 선택 해 주세요
            </header>
            <WriteBoardLocationCategory setSelectedNationWideName={setSelectedNationWideName} setNationWideDetailFlag={setNationWideDetailFlag}/>                      
            <div css={s.locationDetailContainer}>
                        {getNationWide.isLoading ? "" : getNationWide.data !== undefined ? getNationWide.data.data.map(nationWide => (
                        <div css={s.locationDetail}  key={nationWide.nationWideDetailId}>
                            <button onClick={contentOnChangeHandle} id={nationWide.nationWideDetailId} value={nationWide.nationWideDetailId} name='nationWideDetailId'>{nationWide.nationWideDetailName}</button>
                            {/* <label htmlFor={nationWide.nationWideDetailId} >{nationWide.nationWideDetailName}</label> */}
                        </div>))
                    : ""}
            </div>
            <div>
                선택한 주소: {getAddress.isLoading ? "" : getAddress.data !== undefined ? getAddress.data.data[0].nationWideName + " " + getAddress.data.data[0].nationWideDetail.nationWideDetailName : ""}  
            </div>
            <main css={s.mainContainer(writeBoardFlag)}>
                카테고리 선택
                <div css={s.categoryContainer}>
                    <div css={s.category}>
                        {getCategory.isLoading ? "" : getCategory.data !== undefined ? getCategory.data.data.map(category => (
                            <div css={s.locationDetail}  key={category.categoryId}>
                                <button css={s.categoryButton} onClick={contentOnChangeHandle} id={category.categoryId} value={category.categoryId} name='categoryId'>{category.categoryName}</button>
                                {/* <label htmlFor={nationWide.nationWideDetailId} >{nationWide.nationWideDetailName}</label> */}
                            </div>))
                        : ""}
                    </div>
                </div>
                <div css={s.contentImgContainer}>
                    <div css={s.contentImg}>
                        + (사진)
                    </div>
                </div>
                <div css={s.titleContainer}>
                    <input css={s.titleInput} onChange={contentOnChangeHandle} type="text" placeholder='제목' name='title' />
                </div>
                <div css={s.contentContainer}>
                    <textarea css={s.contentTextArea} onChange={contentOnChangeHandle} placeholder='글 내용 입력' name='content' />
                </div>
                <div css={s.priceContainer}>
                    <input css={s.priecInput} onChange={contentOnChangeHandle} type="text" placeholder='가격 입력' name='price'/>
                </div>
                <div css={s.saveButtonContainer}>
                    <button css={s.saveButton} onClick={writeBoardSaveHandle}>등록하기</button>
                </div>
            </main>
        </div>
    );
};

export default WriteBoard;