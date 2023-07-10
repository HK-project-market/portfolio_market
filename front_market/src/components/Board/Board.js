/** @jsxImportSource @emotion/react */
import React from 'react';
import * as s from '../../pages/Main/Style';
import { Navigate, useNavigate } from 'react-router-dom';

const Board = ({ board }) => {
    const navigate = useNavigate();
    
    const clickHandle = () => {
        if(localStorage.getItem("accessToken") === null){
            alert("로그인이 필요합니다.");
            window.location.href = "http://localhost:3000/auth/login"
        }else{
            navigate("/market/board/" + board.boardId)
        }
    }
    console.log(board)
    return (
        <div css={s.boardContainer} onClick={clickHandle}>
            {board === [] ? "글이없슴" : (            
                <div key={board.boardId}>
                    <div css={s.board}>
                        <div css={s.boardImg}>
                            {board.profileImg}
                        </div>
                        <div css={s.boardContentContainer}>
                            <div css={s.boardTitle}>
                                {board.boardTitle} 
                            </div>
                        <div css={s.boardContent}>
                            {board.boardContent}
                        </div>
                        <div css={s.price}>
                            <div>
                                {board.productPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원
                            </div>
                            <div>
                                {board.boardDate}
                            </div>
                            <div>
                                {board.username}
                            </div>
                            <div>
                                {board.temperature}
                            </div>
                            <div css={s.address}>
                                {board.boardAddress}
                            </div>
                        </div>
                    </div>
                </div>
            </div>)}

        </div>
        
    );
};

export default Board;