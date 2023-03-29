import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { Logo } from '../logo/Logo';
import { BurgerBtn } from '../burgerBtn/BurgerBtn';
import Navigation from '../navigation/Navigation';
import MobileTabletMenu from '../MobileTabletMenu/MobileTabletMenu';

import css from './Header.module.css';

function Header() {
  const token = useSelector(state => state.auth?.token);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const handleOpenMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  useEffect(() => {
    if (!location?.pathname) return;
    setIsMenuOpen(false);
  }, [location?.pathname]);

  return (
    <>
      <header className={css.header}>
        <Logo />
        <div className={css.navigationBox}>
          <Navigation />
        </div>

        {token && (
          <div className={css.userMenuDiv}>
            <BurgerBtn onClick={handleOpenMenu} isMenuOpen={isMenuOpen} />
          </div>
        )}
      </header>
      {isMenuOpen && <MobileTabletMenu closeMenu={handleOpenMenu} />}
    </>
  );
}

export default Header;
