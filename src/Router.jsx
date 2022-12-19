import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import KakaoLogin from './pages/Login/KakaoLogin';
import Subscribe from './pages/Subscribe/Subscribe';
import Payment from './pages/Payment/Payment';
import LectureVideo from './pages/LectureVideo/LectureVideo';
import CreatorCenter from './pages/CreatorCenter/CreatorCenter';
import YesNav from './YesNav';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/kakaologin" element={<KakaoLogin />} />
        <Route path="/subscribe" element={<Subscribe />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/creatorcenter" element={<CreatorCenter />} />
        <Route path="/lecturevideo" element={<LectureVideo />} />
        <Route path="/*" element={<YesNav />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
