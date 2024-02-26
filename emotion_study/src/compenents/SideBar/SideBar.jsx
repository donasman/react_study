/** @jsxImportSource @emotion/react */

import { useState } from "react";
import * as S from "./style";
import { FaCaretRight,FaCaretLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MENUS } from "../../constants/menu";


function SideBar() {
    const [isShow,setShow] = useState(false)
    
    return (
        <aside css={S.layOut(isShow)}>
            <button css={S.toggleButton} onClick={() => setShow(!isShow)}>
               {isShow ? <FaCaretLeft /> : <FaCaretRight />} 
            </button>
            <ul css={S.menuList}>
                {MENUS.map(menu => 
                    <Link css={S.menuItem} to = {menu.path} key = {menu.id} onClick={() => setShow(false)}>
                    <li>{menu.name}</li></Link>)
                }
            </ul>
        </aside>
    );
}

export default SideBar;