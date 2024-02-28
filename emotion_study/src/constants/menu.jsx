import BoardEx from "../compenents/pages/BoardEX/BoardEx";
import BoardList from "../compenents/pages/BoardList/BoardList";
import BoardWrite from "../compenents/pages/BoardWrite/BoardWrite";
import Image from "../compenents/pages/ImageEx/Image";
import Image2 from "../compenents/pages/ImageEx2/Image2";
import Image3 from "../compenents/pages/ImageEx3/Image3";
import Image4 from "../compenents/pages/ImageEx4/Image4";
import Mypage from "../compenents/pages/Mypage/Mypage";

export const MENUS = [
    {
        id: 1,
        path: "/mypage",
        name: "마이페이지",
        element: <Mypage />
    },
    {
        id: 2,
        path: "/board",
        name: "게시글",
        element: <>게시판</>
    },
    {
        id: 3,
        path: "/notice",
        name: "공지사항",
        element:<>공지사항</>
    },
    {
        id: 4,
        path: "/image/ex",
        name: "이미지 불러오기",
        element:<Image />
    },
    {
        id: 5,
        path: "/image/ex2",
        name: "다중 업로드",
        element:<Image2 />
    },
    {
        id: 6,
        path: "/image/ex3",
        name: "이미지 여러개 불러오기",
        element:<Image3 />
    },
    {
        id: 7,
        path: "/image/ex4",
        name: "이미지 여러개 불러오기2",
        element:<Image4 />
    },
    {
        id: 8,
        path: "/board/write",
        name: "게시글 작성",
        element:<BoardWrite />
    },
    {
        id: 9,
        path: "/board/list",
        name: "게시글 목록",
        element:<BoardList />
    },
];
