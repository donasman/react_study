/** @jsxImportSource @emotion/react */
import * as S from './style';
import { useState } from 'react';
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { MENUS } from '../../constants/menu';



function SideBarTop() {
    const [ isShow, setIsShow ] = useState(false);

    

    return (
        <aside css={S.layOut(isShow)}>
            <button css={S.toggleButton} onClick={() => setIsShow(!isShow)}>
            {isShow ? <FaAngleUp /> : <FaAngleDown />}
            </button>
            <ul css={S.title}>
                {MENUS.map(menu => 
                    <Link css={S.titleList} to = {menu.path} key = {menu.id} onClick= { () => setIsShow(false)}>
                    <li>{menu.name}</li></Link>)
                }
            </ul>
        </aside>
    );
}

export default SideBarTop;