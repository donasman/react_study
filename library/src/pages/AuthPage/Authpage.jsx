/** @jsxImportSource @emotion/react */
import * as s from "./style"
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SignupPage from "../SignupPage/SignupPage";
import SigninPage from "../SigninPage/SigninPage";

function Authpage(props) {
    return (
        <div css={s.layout}>
            <Routes>
                <Route path='/signin' element={<SigninPage/>} />
                <Route path='/signup' element={ <SignupPage /> }/>
                <Route path='/signup/oauth' />
            </Routes>

        </div>
    );
}

export default Authpage;