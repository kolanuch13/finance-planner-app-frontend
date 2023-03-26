import React from 'react';
import Header from '../Header/header/Header';
import { Home } from '../../pages/HomePage/HomePage';

export const ModalView = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Home />
    </>
  );
};
