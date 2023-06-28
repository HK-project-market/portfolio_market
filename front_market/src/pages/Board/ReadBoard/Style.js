import { css } from "@emotion/react";

export const readBoardContainer = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100%;

border: 1px solid #121212;
`;

export const headerContainer = css`
    display: flex;
    justify-content: center;
    align-items: center;

    margin-top: 100px;

    width: 100%;
    height: 300px;

/* border: 1px solid #121212; */
`;

export const titleContainer = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 40%;

border: 1px solid #121212;
`;

export const titleBox = css`
    width: 50%;
`;

export const title = css`
    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 30px;
/* border: 1px solid #121212; */
`;

export const dateBox = css`
    width: 70%;
`;

export const date = css`
    display: flex;
    justify-content: flex-end;
/* border: 1px solid #121212; */
`;

export const mainContainer = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 90%;
    height: 100%;
border: 1px solid #121212;
`;

export const imgContainer = css`
    display: flex;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: center;

    width: 100%;
    height: 100%;

    overflow-x: auto;
border: 5px solid #121212;
`;

export const imgBox = css`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 300px;
    height: 300px;

    margin: 3px 5px 3px 5px;
border: 5px solid #121212;
`;

export const img = css`
    width: 250px;
    height: 100%;
`;

export const boardInformationContainer = css`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    width: 80%;
    height: 100px;
    margin-top: 30px;

border: 2px solid #121212;
`;

export const boardInformationBox = css`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 20%;
    height: 100%;
border: 1px solid #121212;
`;

export const boardInformationUsername = css`
    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 20px;
`;

export const boardContentContainer = css`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    /* align-items: center; */
    overflow-y: auto;

    margin: 30px 0px 30px 0px;
    padding: 30px;

    width: 70%;
    height: 500px;

    font-size: 20px;

border: 1px solid #121212;
`;