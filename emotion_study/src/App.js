import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Reset } from 'styled-reset';
import SideBar from './compenents/SideBar/SideBar';
import SideBarTop from './compenents/SideBarTop/SideBarTop';
import RootLayout from './compenents/RootLayout/RootLayout';
import { MENUS } from './constants/menu';


function App() {
  return (
    <>
      <Reset />
      <SideBar />
      <SideBarTop />
      <RootLayout>
        <Routes>
          {MENUS.map ((menu,index) => <Route key={index} path={menu.path} element={menu.element} />)}
        </Routes>
      </RootLayout>
    </>
  )
};


export default App;
