import { useCallback, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { principalState } from "../atoms/principalAtom";
import { useRecoilState } from "recoil";
import { getPrincipalRequest } from "../apis/api/principal";
import Authpage from "../pages/AuthPage/Authpage";
import HomePage from "../pages/HomePage/HomePage";

function AuthRoute(props) {

    const [ principal, setPrincipal ] = useRecoilState(principalState);

    useEffect(() => {
        getPricipal();
    }, [])

    const getPricipal = useCallback(() => {
        getPrincipalRequest()
        .then(response => {
            setPrincipal(() => response.data);
            console.log(response);
        }).catch(error => {
            console.log(error);
        });
    }, [])

    return (
        <Routes>
            <Route path="/auth/*" element={ <Authpage />} />
            <Route path="/" element={ <HomePage />} />
        </Routes>
    );
}

export default AuthRoute;