import { css } from '@emotion/react';

export const category = css`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;

    top: 155px;
`;

export const categoryContainer = css`
    display: flex;
    width: 100%;
    justify-content: space-between;
    flex-wrap: wrap;
    position: fixed;
    top: 157px;

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
    display: none;
`;
export const label = css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 67px;
    height: 15px;
    font-size: 12px;
    font-family: 'Ansungtangmyun-Bold', sans-serif;
    
    cursor: pointer;
    input[type="checkbox"]:checked + & {
        font-weight: 600;
    }
`;