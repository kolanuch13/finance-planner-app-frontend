import React, { Suspense } from 'react';
import Header from '../Header/header/Header';
import Loader from '../Loader/Loader';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <div>
      <Header />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};
