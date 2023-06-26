import { css } from '@emotion/react';
/** @jsxImportSource @emotion/react */

export const loginAndRegisterContainer = css`
    display: flex;
    flex-direction: column;
    width: 15%;
    height: 600px;

    position: fixed;
    top: 200px;
    right: 10%;
    border: 1px solid #121212;

`;

export const mainPageContainer = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    width: 88%;
`;

export const headerContainer = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
   
    margin: 50px auto;
    
    width: 100%;
    height: 100%;


`;

export const logoAndSearchBar = css`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    flex-direction: column;
    
    width: 100%;

    background-color: #dbdbdb;
    border: 1px solid #121212;
`;

export const logo = css`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 120px;
    
    font-size: 200%;
    width: 50%;
    height: auto;
    
    /* border: 1px solid #121212; */
    /* border-radius: 20px; */
`;

export const searchBarAndSearchButton = css`
    display: flex;
    justify-content: center;
    align-items: center;
    
    width: 100%;
    height: 100%;
    
    margin-bottom: 30px;
`;

export const searchBar = css`
    display: flex;
    justify-content: center;
    align-items: center;

    margin-top: 10px;
    
    width: 500px;
    height: 50px;
    border-radius: 20px;
`;

export const searchButton = css`
    display: flex;
    justify-content: center;
    align-items: center;

    margin-top: 10px;

    width: 50px;
    height: 50px;
    border-radius: 20px;
`;

export const mainLoginContainer = css`
    display: flex;
    justify-content: center;
    justify-content: flex-start;
    align-items: center;
    
    margin-top: 100px;

    border-radius: 20px;
`;

export const board = css`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;

    width: 55%;
    height: 260px;
    
    border: 1px solid #121212;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
`;

export const boardImg = css`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 20%;
    /* height 임시로 250px 잡아논거임 나중에 100%로 바꿔야함 */
    height: 260px; 
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    border: 1px solid #121212;
`;

export const boardTitle = css`
    display: flex;
    justify-content: flex-start;
    align-items: center;

    padding: 15px;

    overflow-x: auto;
    white-space: nowrap;
    text-overflow: ellipsis;

    width: 88%;
    height: 50%;
    border-radius: 20px;
    /* border: 1px solid #121212; */
`;

export const boardContent = css`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;

    overflow: hidden;
    text-overflow: ellipsis;

    padding: 15px;

    width: 88%;
    height: 100%;

    border-radius: 20px;
    /* border: 1px solid #121212; */
`;

export const price = css`
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 0px 20px 20px 15px;
    font-size: 30px;
`;

export const address = css`
    display: flex;
    justify-content: center;
    align-items: center;

    margin-bottom: 20px;
    font-size: 20px;

    padding: 0px 0px 0px 15px;
`;




export const writeBoard = css`
    position: fixed;
    bottom: 100px;
    right: 490px;
`;

export const writeBoardButton = css`
    background-color: yellowgreen;
    border: 1px solid #dbdbdb;
    font-size: 20px;
`;