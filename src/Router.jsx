import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Loading from './components/Loading/Loading';

const Login = lazy(() => import('./pages/Login/Login'));
const KakaoLogin = lazy(() => import('./pages/Login/KakaoLogin'));
const Subscribe = lazy(() => import('./pages/Subscribe/Subscribe'));
const Payment = lazy(() => import('./pages/Payment/Payment'));
const LectureVideo = lazy(() => import('./pages/LectureVideo/LectureVideo'));
const CreatorCenter = lazy(() => import('./pages/CreatorCenter/CreatorCenter'));
const YesNav = lazy(() => import('./YesNav'));

function Router() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/kakaologin" element={<KakaoLogin />} />
          <Route path="/subscribe" element={<Subscribe />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/creatorcenter" element={<CreatorCenter />} />
          <Route path="/lecturevideo" element={<LectureVideo />} />
          <Route path="/*" element={<YesNav />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default Router;
