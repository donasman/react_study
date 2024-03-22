/** @jsxImportSource @emotion/react */
import * as s from "./style"
import { useRecoilState } from "recoil";
import { menuState } from "../../atoms/menuAtom";
import { HiMenu } from "react-icons/hi"
import { Link, useNavigate } from "react-router-dom";
import { FiUser,FiLogOut } from "react-icons/fi";
import { principalState } from "../../atoms/principalAtom";
import { useQueryClient } from "react-query";
import { useEffect, useState } from "react";
import axios from "axios";
import instance from "../../apis/utils/instance";

function RootHeader() {
    const navigate = useNavigate();
    const [ show, setShow ] = useRecoilState(menuState);
    const [ isLogin, setIsLogin ] = useState(false);
    const queryClient = useQueryClient(); 
    const principalQueryState = queryClient.getQueryState("principalQuery")
    

    useEffect(() => {
        setIsLogin(() => principalQueryState.status === "success");
    }, [principalQueryState])

    

    const handleOpenClick = (e) => {
        e.stopPropagation();
        setShow(() => true);
    }
    
    const handleLogoutClick = () => {
        localStorage.removeItem("AccessToken");
        // instance.interceptors.request.use((config) => { // 요청을 보내기 전에 낚아채라
        //     config.headers.Authorization = null; // 낚아챈것을 설정한다
        //     return config;
        // });
        // queryClient.refetchQueries("principalQuery");
        window.location.replace("/auth/signin");
    }

    return (
        <div css={s.header}>
            <button css={s.menuButton} onClick={handleOpenClick}>
                <HiMenu />
            </button>
             {
                !isLogin
                ? <Link css={s.account} to={"/auth/signin"}>
                    <FiUser />
                </Link>
                : 
                <div css={s.accountItem}>
                    <button css={s.logout} onClick={handleLogoutClick}>
                        <FiLogOut />
                    </button>
                    <Link css={s.account} to={"/account/mypage"}>
                        <FiUser />
                    </Link>   
                </div>
            }
            
        </div>
    ); 
}

export default RootHeader;