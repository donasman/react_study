/** @jsxImportSource @emotion/react */
import * as s from "./style"
import React from 'react';
import { GridLoader } from 'react-spinners';

function FullSizeLoader({ size }) {
    //#36d7b7
    return (
        <div css={s.layout}>
            <GridLoader color="#36d7b7" size={size}/>
        </div>
    );
}

export default FullSizeLoader;