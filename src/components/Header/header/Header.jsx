// import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
// import { Link, useLocation } from 'react-router-dom';
import { Logo } from '../logo/Logo';
import { UserBar } from '../userBar/UserBar';
import { BurgerBtn } from '../burgerBtn/BurgerBtn';
import Navigation from '../navigation/Navigation';

import css from './Header.module.css';

function Header() {
  const token = useSelector(state => state.auth?.token);

  return (
    <>
      <header className={css.header}>
        <Logo />
        {!token && (
          <div className={css.navigationBox}>
            <Navigation />
          </div>
        )}

        {token && (
          <div className={css.userMenuDiv}>
            <UserBar />
            <BurgerBtn />
          </div>
        )}
      </header>
    </>
  );
}

export default Header;
