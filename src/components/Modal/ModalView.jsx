import { lazy } from 'react';
import React from 'react';
import Header from '../Header/header/Header';
import HeaderMobileModals from '../Header/header/HeaderMobileModals';
import { useMediaQuery } from 'react-responsive';
const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));

export const ModalView = ({ children }) => {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  return (
    <>
      {isMobile ? <HeaderMobileModals /> : <Header />}
      {!isMobile && <HomePage />}
      {children}
    </>
  );
};
