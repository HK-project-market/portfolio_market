import axios from 'axios';
import React, { useState } from 'react';
import { useMutation } from 'react-query';

const WriteBoard = () => {
    const [ boardContent, setBoardContent ] = useState({title: "", content: "", price: "", address:"asdf", category: "전자제품"});

    const contentOnChangeHandle = (e) => {
        const { name, value } = e.target;
        setBoardContent({ ...boardContent, [name]: value });
        console.log(boardContent)
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

    const writeBoardSaveHandle = () => {
        insertBoardContent.mutate();
    }  

    return (
        <div>
            <header>
                글쓰기
            </header>
            <main>
                <div>
                    <input onChange={contentOnChangeHandle} type="text" placeholder='제목' name='title' />
                </div>
                <div>
                    <textarea onChange={contentOnChangeHandle} placeholder='상품 내용 입력' name='content' />
                </div>
                <div>
                    <input onChange={contentOnChangeHandle} type="text" placeholder='가격' name='price'/> 
                </div>
                <div>
                    주소: 라이브러리 ?? 아님 노가다??
                </div>
                <div>

                </div>
                <button onClick={writeBoardSaveHandle}>저장</button>
            </main>
        </div>
    );
};

export default WriteBoard;