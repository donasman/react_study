import { Route, Routes } from "react-router-dom";
import { getPrincipalRequest } from "../apis/api/principal";
import Authpage from "../pages/AuthPage/Authpage";
import HomePage from "../pages/HomePage/HomePage";
import { useQuery } from "react-query";
import RootSideMenuLeft from "../components/RootSideMenuLeft/RootSideMenuLeft";
import RootHeader from "../components/RootHeader/RootHeader";
import FullSizeLoader from "../components/FullSizeLoader/FullSizeLoader";
import MyPage from "../pages/MyPage/MyPage";
import PageContainer from "../components/PageContainer/PageContainer";
import PasswordEditPage from "../pages/PasswordEditPage/PasswordEditPage";
import BookManagement from "../pages/Admin/BookManagement/BookManagement";

// useQuery => get요청시에 사용
// 첫번째 매개변수 => 배열 ["key값", dependency]
// 두번째 매개변수 => 요청메소드(async, await) 형태로 사용
// 세번째 매개변수 => 옵션(retry: 0, refetchOnWindowFocus: false)
/*
    {
        retry: 0, 
        refetchOnWindowFocus: false,
        onSuccess: 함수,
        onError: 함수,
        enabled: true or false        
    }
    위와 같은 객체 형태로 들어간다

*/
function AuthRoute(props) {


    const principalQuery = useQuery(["principalQuery"], getPrincipalRequest, // "getPrincipal" 키 값을 함수명과 맞춰줘서 직관적이게 한다
    {
        retry: 0,
        refetchOnWindowFocus: false, // 윈도우에 포커스가 오면 최신상태로 만들어준다 -> false를 걸어 새로 포커스를 잡을 때마다 최신상태로 만들지 않기 하기 위함
        onSuccess: response => { // 요청 성공 response에 getPrincipalRequest data가 넘어옴
            console.log("onSuccess")
            console.log(response)

        },
        onError: error => {
            console.log("오류");
            console.log(error);
        }
    });

    return (
        <>
            <RootSideMenuLeft />
            <RootHeader />
            <PageContainer>
                {
                    principalQuery.isLoading 
                    ?
                    <FullSizeLoader size={20}/>
                    : <Routes>
                        <Route path="/auth/*" element={ <Authpage />} />
                        <Route path="/" element={ <HomePage />} />
                        <Route path="/account/mypage" element={ <MyPage />} />
                        <Route path='/account/edit/password' element={ <PasswordEditPage />}/>
                        <Route path='/admin/book/management' element={ <BookManagement /> } />
                    </Routes>
                }
            </PageContainer>
        
        </>
        
            
        
    );
}

export default AuthRoute;