import { css } from "@emotion/react";

export const WriteBoardContainer = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin-top: 100px;
    width: 100%;
    height: auto;

    border: 1px solid #121212;
`;

export const headerContainer = css`
    margin: 50px;
    font-size: 30px;
`;

export const mainContainer =(writeBoardFlag) => css`
    display: ${writeBoardFlag ? "flex" : "none"};
    
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    width: 100%;
    height: auto;
    
    
border: 1px solid #121212;
`;

export const contentImgContainer = css`
    display: flex;
    justify-content: flex-start;
    align-items: center;

    margin: 30px;

    width: 100%;
    height: 30%;
/* border:1px solid #121212; */
`;

export const contentImg = css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 15%;
    /* height: 100%; */
    /* 임시로 잡아놓은 크기임 나중에 100%로 바꿔야함 */
    height: 260px;
    
    margin-left: 30px;
    padding-left: 10px;

    font-size: 20px;
    
border: 1px solid #121212;
`;

export const titleContainer = css`
    display: flex;
    justify-content: flex-start;
    align-items: center;

    margin: 30px 0px 30px 30px;
    width: 100%;
    height: 50px;
/* border: 1px solid #121212; */
`;
export const titleInput = css`
    margin-left: 13px;
    padding-left: 10px;
    width: 50%;
    height: 66%;

    font-size: 20px;
`;

export const contentContainer = css`
    display: flex;
    justify-content: flex-start;
    align-items: center;

    margin: 0px 0px 30px 30px;
    width: 100%;
    height: 500px;
/* border: 1px solid #121212; */
`;

export const contentTextArea = css`
    margin-left: 13px;
    padding-left: 10px;

    width: 50%;
    height: 500px;
    
    font-size: 20px;
`;

export const priceContainer = css`
    display: flex;
    justify-content: flex-start;
    align-items: center;

    margin: 0px 0px 30px 30px;
    width: 100%;
    height: 30px;
/* border: 1px solid #121212; */
`;

export const priceLabel = css`
    display: flex;
    justify-content: flex-start;
    align-items: center;

    width: 100%;
    margin: 20px 0px 15px 30px;
    padding-left: 25px;

    font-size: 17px;
    font-weight: 400;
    /* border: 1px solid #121212; */
`;

export const priceLabelText = css`
    font-size: 20px;
    font-weight: 600;
`;

export const priecInput = css`
    margin-left: 13px;
    padding-left: 10px;

    width: 50%;
    height: 30px;
    
    font-size: 20px;
`;

export const locationDetailContainer = css`
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: flex-start;
    
    margin: 30px;
    height: 55px;
    overflow: auto;
    /* border: 1px solid #121212; */
`;

export const locationDetail = css`
    display: flex;
    align-items: center;
    margin-right: 16px;
    margin-bottom: 8px;
`;

export const saveButtonContainer = css`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    
    width: 60%;

    /* border: 1px solid #121212; */
`;

export const saveButton = css`
    width: 200px;
    margin-bottom: 50px;
    font-size: 30px;

`;

