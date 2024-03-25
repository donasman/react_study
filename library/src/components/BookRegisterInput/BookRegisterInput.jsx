/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from 'react';

const inputBox = css`
    box-sizing: border-box;
    border: none;
    outline: none;
    padding: 0px 10px;
    height: 100%;
    width: 100%;
`;

function BookRegisterInput({ value, onChange, onKeyDown, bookRef}) {

    return (
        <input
            css={inputBox}
            type="text"
            value={value}
            onChange={onChange}
            onKeyDown={onKeyDown}
            ref={bookRef}
            />
    );
}

export default BookRegisterInput;