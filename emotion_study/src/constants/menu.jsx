import Image from "../compenents/pages/ImageEx/Image";
import Image2 from "../compenents/pages/ImageEx2/Image2";
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
];
