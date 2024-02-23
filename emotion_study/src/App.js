import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Reset } from 'styled-reset';
import SideBar from './compenents/SideBar/SideBar';
import SideBarTop from './compenents/SideBarTop/SideBarTop';
import RootLayout from './compenents/RootLayout/RootLayout';
import Mypage from './compenents/pages/Mypage/Mypage';


function App() {
  return (
    <>
      <Reset />
      <SideBar />
      <SideBarTop />
      <RootLayout>
        <Routes>
          <Route path='/mypage' element={<Mypage />} />
          <Route path='/board' element={<>게시판</>}/>
          <Route path='/notice' element={<>공지사항</>}/>
        </Routes>
      </RootLayout>
    </>
  );
}

export default App;
