// import { useState, useEffect } from 'react';
// import { useSelector } from 'react-redux';
// import { Link, useLocation } from 'react-router-dom';
import { Logo } from '../logo/Logo';
import Navigation from '../userNav/UserNav';

import css from './Header.module.css';

function Header() {
  // const token = useSelector(state => state.auth?.token);

  return (
    <>
      <header className={css.header}>
        <Logo />
        <div className={css.navigationBox}>
          <Navigation />
        </div>
      </header>
    </>
  );
}

export default Header;
