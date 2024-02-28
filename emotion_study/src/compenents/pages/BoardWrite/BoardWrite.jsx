/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useEffect, useMemo, useRef, useState } from 'react';
import ReactQuill, { Quill } from "react-quill";
import { QUILL_MODULES } from "../../../constants/quillModules";
import { useInput, useMaxSizeValidateInput } from "../../../hooks/inputHooks";
import { useQuillInput } from "../../../hooks/quillHooks";
import { json, useNavigate } from "react-router-dom";
import { useLoadList } from "../../../hooks/boardListHooks";


const layOut = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 100px 120px;
    border: 1px solid #dbdbdb;
    padding: 50px 0px;
`;

const headerTitle = css`
    margin-bottom: 30px;
    text-align: center;
    font-size: 40px;
    font-weight: 700;
`
const boardTitle = css`
    box-sizing: border-box;
    margin-bottom: 10px;
    outline: none;
    border: 1px solid #ccc;
    padding: 10px;
    width: 90%;
`;
const submitButton = css`
    box-sizing: border-box;
    margin-top: 50px;
    border: 1px solid #ccc;
    padding: 10px;
    width: 90%;
    background-color: white;
    font-weight: 600;
    cursor: pointer;
    &:hover {
        background-color: #fafafa;
    }
    &:active {
        background-color: #eee;
    }
`;


function BoardWrite(props) {

    const navigate = useNavigate();
    const [ inputValue, handleInputChange ] = useMaxSizeValidateInput(10);
    const [ quillValue, handleQuillValueChange ] = useQuillInput();
    const { boardList, lastId } = useLoadList();

    const handleSubmitClick = () => {
        const board = {
            boardId: lastId + 1,
            boardTitle: inputValue,
            boardContent: quillValue
        };

        const newBoardList = [...boardList, board];
        localStorage.setItem("boardList", JSON.stringify(newBoardList));
        alert("글 작성 완료.");
        navigate("/board/list")
    }

    

    return (
        <div css={layOut}>
            <h1 css={headerTitle}>글 작성하기</h1>
            <input 
                css={boardTitle} type="text"
                placeholder="제목을 입력하세요."  
                onChange={handleInputChange}
                value={inputValue}    
            />
            <ReactQuill 
                style={{
                    width:"90%",
                    height:"400px"
                }} 
                modules={QUILL_MODULES}
                onChange={handleQuillValueChange}
                
            />
            <button css={submitButton} onClick={handleSubmitClick}>작성하기</button>
        </div>
    );
}

export default BoardWrite;