/** @jsxImportSource @emotion/react */
import { useRecoilState } from "recoil";
import { menuState } from "../../atoms/menuAtom";
import * as s from "./style"
import { HiMenu } from "react-icons/hi"

function RootHeader() {

    const [ show, setShow ] = useRecoilState(menuState);

    const handleOpenClick = () => {
        setShow(() => true);
    }
    return (
        <div css={s.header}>
            <button css={s.menuButton} onClick={handleOpenClick}>
                <HiMenu />
            </button>
        </div>
    ); 
}

export default RootHeader;