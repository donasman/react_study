import { css } from "@emotion/react";

export const layout = (show) => css`
    transition: all 0.5s ease-in-out;
    opacity: ${show ? 1 : 0};
    position: absolute;
    top: 0;
    left: ${show ? "0px" : "-200px"};
    z-index: 99;
    box-sizing: border-box;
    border-right: 1px solid #dbdbdb;
    padding: 15px 0px;
    width: 200px;
    height: 100%;
    background-color: #fafafa;
`;

export const header = css`
    box-sizing: border-box;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    border-bottom: 1px solid #dbdbdb;
    padding: 0px 10px;
    width: 100%;
    height: 50px;

`
export const menuButton = css`
    box-sizing: border-box;
    border: none;
    padding: 10px;
    background-color: transparent;
    cursor: pointer;
    & > * {
        font-size: 16px;
    }

`;

export const profile = css`
    box-sizing: border-box;
    border-bottom: 1px solid #dbdbdb;
    width: 100%;
    height: 150px;    
`;

export const authButton = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20px;
    width: 100%;
    height: 100%;

    & > button {
        border: 1px solid #dbdbdb;
        box-sizing: border-box;
        border-radius: 3px;
        padding: 5px;
        margin-bottom: 5px;
        background-color: white;
        font-weight: 600;
        cursor: pointer;

        &:hover {
            background-color: #fafafa;
        }
        &:active {
            background-color: #eeeeee;
        }
    }
`;

export const settings = css`
    display: flex;
    justify-content: flex-end;
    padding: 5px 10px;
    
    & > * {
        padding: 5px;
        cursor: pointer;
    }
`;

export const profileBox = css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    
`;
export const profileImg = css`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #dbdbdb;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    background-color: white;
    cursor: pointer;

        &:hover {
            background-color: #fafafa;
        }
        &:active {
            background-color: #eeeeee;
        }

`;
export const usernameAndEmail = css`
    display: flex;
    flex-direction: column;
    margin-left: 5px;
    cursor: default;
    & > span:nth-of-type(1) {
        font-weight: 600;
    } 
    & > span:nth-of-type(2) {
        font-size: 12px;

    }
`;

// export const loginButton = css`
//     text-decoration: none;
//     width: 100%;
// `

// export const setting = css`
//     position: absolute;
//     right: 10px;
//     top: 10px;
//     cursor: pointer;
// `;

// export const userImg = css`
//     width: 100%;
// `;

// export const profileImg = css`
//     position: absolute;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     top: 20px;
//     border: 1px solid #dbdbdb;
//     border-radius: 50%;
//     width: 80px;
//     height: 80px;
//     cursor: pointer;
// `;

// export const username = css`
//     position: absolute;
//     top: 80px;
// `;

// export const email = css`
//     position: absolute;
//     top: 100px;
// `;

export const menuList = css`

    
`;

export const menuLink = css`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #dbdbdb;
    padding: 0px 20px;
    height: 40px;
    background-color: #fdfdfd;
    font-size: 14px;
    font-weight: 600;
    text-decoration: none;
    color: #222222;

    
`;