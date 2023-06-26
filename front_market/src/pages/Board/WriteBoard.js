import axios from 'axios';
import React, { useState } from 'react';
import { useMutation, useQuery } from 'react-query';
/** @jsxImportSource @emotion/react */
import WriteBoardLocationCategory from '../../components/LocationCategory/WriteBoardLocationCategory';
import * as s from './Style';



const WriteBoard = () => {
    const [ selectedCategories, setSelectedCategories ] = useState("");
    const [ boardContent, setBoardContent ] = useState({title: "", content: "", price: "", address:"asdf", category: "전자제품"});
    const [ enteredNum, setEnterdNum ] = useState("");
    const [ categoryDetailFlag, setCategoryDetailFlag ] = useState(false);



   
    const contentOnChangeHandle = (e) => {
        const { name, value } = e.target;
        setBoardContent({ ...boardContent, [name]: value });
        const removedCommaValue = Number(value.replace(/[^0-9]/g, ""));
        const formattedValue = removedCommaValue.toLocaleString() + "원";
        setEnterdNum(formattedValue);
    }  

    const priceModifyButtonHandle = () => {
        setEnterdNum("0원");
    }

    const insertBoardContent = useMutation(async() => {
        const option = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("accessToken")}`
            }
        }
        const response = await axios.post("http://localhost:8080/market/write/board", JSON.stringify(boardContent), option);
        console.log(response)
    })

    const getLocationDetail = useQuery(["getLocationDetail"],async() => {
        const option = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("accessToken")}`
            },
            params : {
                nationWide: selectedCategories
            }
        }
        
        const response = await axios.get("http://localhost:8080/market/region/detail", option);
       
        console.log(response.data)
        return response
    }, {
        enabled: categoryDetailFlag,
        onSuccess: () => {
            setSelectedCategories("");
            setCategoryDetailFlag(false);
        }
    });

    const writeBoardSaveHandle = () => {
        insertBoardContent.mutate();
    }  
    if(getLocationDetail.isLoading){
        return <div>로딩중</div>
    }
    return (
        <div css={s.WriteBoardContainer}>
            <header css={s.headerContainer}>
                주소를 먼저 선택 해 주세요
            </header>
            <WriteBoardLocationCategory selectedCategories={selectedCategories} setSelectedCategories={setSelectedCategories} categoryDetailFlag={categoryDetailFlag} setCategoryDetailFlag={setCategoryDetailFlag}/>                   
            <div css={s.locationDetailContainer}>
                        {getLocationDetail.isLoading ? "" : getLocationDetail.data !== undefined ? getLocationDetail.data.data.map(category => (
                        <div css={s.locationDetail}  key={category.regionCategoryId}>
                            <input type="checkbox" id={category.regionCategoryId} value={category.regionCategoryId}/>
                            <label htmlFor={category.regionCategoryId} >{category.regionCityCounty}</label>
                        </div>))
                    : ""}
                    </div>
            <main css={s.mainContainer}>
                <div css={s.contentImgContainer}>
                    <div css={s.contentImg}>
                        + (사진)
                    </div>
                </div>
                <div css={s.titleContainer}>
                    <input css={s.titleInput} onChange={contentOnChangeHandle} type="text" placeholder='제목' name='title' />
                </div>
                <div css={s.contentContainer}>
                    <textarea css={s.contentTextArea} onChange={contentOnChangeHandle} placeholder='상품 내용 입력' name='content' />
                </div>
                <div css={s.priceLabel}>
                    <label> 가격 수정을 원하시면 <label css={s.priceLabelText}>"가격 수정 버튼"</label>을 눌려주세요</label>
                </div>
                <div css={s.priceContainer}>
                    <input css={s.priecInput} onChange={contentOnChangeHandle} type="text" value={enteredNum} name='price'/> 
                    <button onClick={priceModifyButtonHandle}>가격 수정 버튼</button>
                </div>
                <div css={s.saveButtonContainer}>
                    <button css={s.saveButton} onClick={writeBoardSaveHandle}>등록하기</button>
                </div>
            </main>
        </div>
    );
};

export default WriteBoard;