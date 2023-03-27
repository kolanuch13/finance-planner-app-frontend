import React from 'react';
import Header from '../Header/header/Header';
import HeaderMobileModals from '../Header/header/HeaderMobileModals';
import { Home } from '../../pages/HomePage/HomePage';
import { useMediaQuery } from 'react-responsive';

export const ModalView = ({ children }) => {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  return (
    <>
      {isMobile ? <HeaderMobileModals /> : <Header />}
      {!isMobile && <Home />}
      {children}
    </>
  );
};
