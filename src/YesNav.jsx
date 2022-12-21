import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Footer from 'components/Footer/Footer';
import Nav from './components/Nav/Nav';
import Detail from './pages/Detail/Detail';
import MyPage from './pages/MyPage/MyPage';
import Main from './pages/Main/Main';

function YesNav() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/classes/detail/:id" element={<Detail />} />
        <Route path="/mypage" element={<MyPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default YesNav;
