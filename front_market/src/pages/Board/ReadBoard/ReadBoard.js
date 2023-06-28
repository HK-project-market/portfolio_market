import axios from 'axios';
/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import * as s from './Style'

const ReadBoard = () => {
    const { boardId } = useParams();
    const [ getBoardFlag, setGetBoardFlag ] = useState(true);
    console.log(boardId)

    const getBoard = useQuery(["getBoard"], async() => {
        const option = {
            headers : {
                Authorization: `Bearer ${localStorage.getItem("accessToken")}`
            }
        }

        const response = await axios.get(`http://localhost:8080/market/board/${boardId}`, option)
        console.log(response.data.categoryName);
        return response;
    }, {
        enabled: getBoardFlag,
        onSuccess: () => {
            setGetBoardFlag(false);
        }
    })
    return (
        <div css={s.readBoardContainer}>
            <header css={s.headerContainer}>
                <div css={s.titleContainer}>
                    <div css={s.titleBox}>
                        <div css={s.title}>
                            {getBoard.isLoading ? "" : getBoard.data !== undefined ? getBoard.data.data.boardTitle : ""}
                        </div>
                    </div>
                    <div css={s.dateBox}>
                        <div css={s.date}>
                            {getBoard.isLoading ? "" : getBoard.data !== undefined ? getBoard.data.data.boardDate : ""}
                        </div>
                    </div>
                </div>
            </header>
            <main css={s.mainContainer}>
                <div css={s.imgContainer}>
                    <div css={s.imgBox}>
                        <div css={s.img}>
                            사진
                        </div>
                    </div>
                    <div css={s.imgBox}>
                        <div css={s.img}>
                            사진
                        </div>
                    </div>
                    <div css={s.imgBox}>
                        <div css={s.img}>
                            사진
                        </div>
                    </div>
                    <div css={s.imgBox}>
                        <div css={s.img}>
                            사진
                        </div>
                    </div>
                    <div css={s.imgBox}>
                        <div css={s.img}>
                            사진
                        </div>
                    </div>
                    <div css={s.imgBox}>
                        <div css={s.img}>
                            사진
                        </div>
                    </div>
                </div>
                <div css={s.boardInformationContainer}>
                    <div css={s.boardInformationBox}>
                        <div css={s.boardInformationUsername}>
                            {getBoard.isLoading ? "" : getBoard.data !== undefined ? getBoard.data.data.username : ""}
                        </div>
                    </div>
                    <div css={s.boardInformationBox}>
                        <div>
                            {getBoard.isLoading ? "" : getBoard.data !== undefined ? getBoard.data.data.boardAddress : ""}
                        </div>
                    </div>
                    <div css={s.boardInformationBox}>
                        <div>
                            {getBoard.isLoading ? "" : getBoard.data !== undefined ? getBoard.data.data.temperature : ""}
                        </div>
                    </div>
                    <div css={s.boardInformationBox}>
                        <div>
                            {getBoard.isLoading ? "" : getBoard.data !== undefined ? getBoard.data.data.categoryName : ""}
                        </div>
                    </div>
                </div>
                <div css={s.boardContentContainer}>
                    {getBoard.isLoading ? "" : getBoard.data !== undefined ? getBoard.data.data.boardContent : ""}
                </div>
            </main>
        </div>
    );
};

export default ReadBoard;