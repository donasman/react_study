/** @jsxImportSource @emotion/react */
import * as S from './style';
import React, { useMemo, useState } from 'react';
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { Link } from 'react-router-dom';



function SideBarTop() {
    const [ isShow, setIsShow ] = useState(false);

    const menus = useMemo( () => [
        {
            id: 1,
            path: "/mypage",
            name: "마이페이지"
        },
        {
            id: 2,
            path: "/board",
            name: "게시판"
        },
        {
            id: 3,
            path: "/notice",
            name: "공지사항"
        }

    ], [])

    return (
        <aside css={S.layOut(isShow)}>
            <button css={S.toggleButton} onClick={() => setIsShow(!isShow)}>
            {isShow ? <FaAngleUp /> : <FaAngleDown />}
            </button>
            <ul css={S.title}>
                {menus.map(menu => 
                    <Link css={S.titleList} to = {menu.path} key = {menu.id} onClick= { () => setIsShow(false)}>
                    <li>{menu.name}</li></Link>)
                }
            </ul>
        </aside>
    );
}

export default SideBarTop;