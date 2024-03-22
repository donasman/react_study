/** @jsxImportSource @emotion/react */
import * as s from "./style"
import { Route, Routes } from 'react-router-dom';
import SignupPage from "../SignupPage/SignupPage";
import SigninPage from "../SigninPage/SigninPage";
import OAuth2page from "../OAuth2Page/OAuth2page";
import OAuth2SignupPage from "../OAuth2SignupPage/OAuth2SignupPage";
import OAuthSigninPage from "../OAuthSigninPage/OAuthSigninPage";
import { useQueryClient } from "react-query";
import { useEffect } from "react";
import OAuth2MergePage from "../OAuth2MergePage/OAuth2MergePage";
import PasswordEditPage from "../PasswordEditPage/PasswordEditPage";

function Authpage(props) {
    const queryClient = useQueryClient();
    const principalData = queryClient.getQueryData("principalQuery");

    useEffect(() => {
        if(!!principalData) {
            alert("잘못된 접근입니다.");
            window.location.replace("/");
        }
    }, []);

    return (
        <div css={s.layout}>
            <Routes>
                <Route path='/signin' element={<SigninPage/>} />
                <Route path='/signup' element={ <SignupPage /> }/>
                <Route path='/oauth2' element={<OAuth2page />} />
                <Route path='/oauth2/signin' element={ <OAuthSigninPage /> }/>
                <Route path='/oauth2/merge' element={ <OAuth2MergePage /> }/>
                <Route path='/oauth2/signup' element={<OAuth2SignupPage />}/>
            </Routes>

        </div>
    );
}

export default Authpage;