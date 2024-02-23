import { css } from "@emotion/react";


export const layOut = (isShow) => css`
    box-sizing: border-box;
    position: fixed;
    display: flex;
    right: 0px;
    z-index: 99;
    top: ${isShow ? "0px" : "-80px"} ;
    height: 80px;
    width: 50%;
    @media screen and (max-width: 1400px){
     top: -80px;
    }
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #dbdbdb;
    transition: all 0.5s ease-in-out;
    background-color: white;
    box-shadow: 1px 0px 5px #00000022;
`;

export const toggleButton = css`
    position: absolute;
    top: 100%;
    right: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    border: 1px solid #dbdbdb;
    border-bottom-right-radius: 8px;
    border-bottom-left-radius: 8px;
    width: 80px;
    height: 30px;
    background-color: white;
    cursor: pointer;
    &:hover {
        background-color: #eee;
    }
    &:active{
        background-color: #aaa;
    }

    `;

export const title = css`
    display: flex;
    padding: 20px;
`;


export const titleList = css`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 50px;
    color: black;
    font-weight: 600;
    border: 1px solid #dbdbdb;
    text-decoration: none;
    cursor: pointer;
    &:nth-of-type(1) {
        margin-right: 20px;
    }
    &:nth-of-type(2) {
        margin-right: 20px;
    }
    &:hover {
        background-color: #eee;
    }
    &:active {
        background-color: #dbdbdb;
    }
    
`;

