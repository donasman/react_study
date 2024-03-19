/** @jsxImportSource @emotion/react */
import { useRecoilState } from "recoil";
import * as s from "./style"
import { HiMenu } from "react-icons/hi"
import { menuState } from "../../atoms/menuAtom";
import { Link, useNavigate } from "react-router-dom";
import { FiUser, FiSettings } from "react-icons/fi";
import { RiSettings4Line } from "react-icons/ri";
import { useQueryClient } from "react-query";
import { useEffect, useState } from "react";


function RootSideMenuLeft() {
    const [ show, setShow ] = useRecoilState(menuState);

    const handleCloseClick = () => {
        setShow(() => false);
    }
    const queryClient = useQueryClient(); 
    const [ isLogin, setIsLogin ] = useState(false);
    const principalQueryData = queryClient.getQueryData("principalQuery");
    const principalQueryState = queryClient.getQueryState("principalQuery");
    const navigate = useNavigate();

    useEffect(()=> {
        setIsLogin(() => principalQueryState.status === "success");
    }, [principalQueryState])
    
    return (
        <div css={s.layout(show)} onClick={(e) => e.stopPropagation()}>
            <div css={s.header}>
            <button css={s.menuButton} onClick={handleCloseClick}>
                <HiMenu />
            </button>
            </div>

            <div css={s.profile} >
                {/* {
                    !isLogin ? 
                    <>
                        <button css={s.loginButton}>
                            <Link to={"/auth/signin"}>로그인</Link>
                        </button> 
                    </>
                    :
                    <>
                        <FiSettings css={s.setting}/>
                        <div css={s.profileImg}>
                            <FiUser css={s.userImg}/>
                            <div css={s.username}>{principalQueryData.data.username}</div>
                            <div css={s.email}>{principalQueryData.data.email}</div>
                        </div>
                    </>
                    
                } */}
                {   !isLogin
                    ? 
                    <div css={s.authButton}>
                        <button onClick={() => navigate("/auth/signin")}>로그인</button>
                        <button onClick={() => navigate("/auth/signup")}>회원가입</button>
                    </div>
                    :
                    <>
                        <div css={s.settings}>
                            <FiSettings/>
                        </div>
                        <div css={s.profileBox}>
                            <div css={s.profileImg}>
                                <FiUser />
                            </div>
                            <div css={s.usernameAndEmail}>
                                <span>{principalQueryData.data.username}</span>
                                <span>{principalQueryData.data.email}</span>
                            </div>
                        </div>
                    </>
                }
                
                
                
                
            </div>
            
            <div css={s.menuList}>
                <Link css={s.menuLink}>
                    도서 검색
                </Link>
            </div>
        </div>
    );
}

export default RootSideMenuLeft;