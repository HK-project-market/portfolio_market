import { css } from '@emotion/react';


export const categoryContainer = css`
    display: flex;
    width: 100%;
    /* justify-content: space-between; */
    flex-wrap: wrap;
   
    font-weight: 600;
    font-size: 12px;
`;

export const categoryBox = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0px 8px;

    cursor: pointer;
    &:hover {
        color: gray;
    }
`;

export const checkbox = css`
    /* display: none; */
    border: none;
    font-size: 20px;
    margin-top: 20px;
`;

export const label = css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 15px;
    font-size: 15px;
    font-family: 'Ansungtangmyun-Bold', sans-serif;
    
    cursor: pointer;
    input[type="checkbox"]:checked + & {
        font-weight: 600;
    }
`;