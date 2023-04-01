import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { Logo } from '../logo/Logo';
import { BurgerBtn } from '../burgerBtn/BurgerBtn';
import LogOut from '../logout/LogOut';
import Navigation from '../navigation/Navigation';
import MobileTabletMenu from '../MobileTabletMenu/MobileTabletMenu';
import AuthMenu from '../authNav/AuthNav';
import css from './Header.module.css';
import LanguageSwitcher from 'components/LanguageSwitcher/LanguageSwitcher';
import { balance } from '../../../redux/auth/auth-selectors'

function Header() {
  const token = useSelector(state => state.auth?.user.token);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const userBalance = useSelector(balance)

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
        {token && (
          <div className={css.authMenu}>
            <AuthMenu balance={userBalance}/>
          </div>
        )}
        <Logo />
        <LanguageSwitcher />
        <div className={css.navigationBox}>
          <Navigation balance={userBalance}/>
        </div>
        {token && (
          <div className={css.userMenuDiv}>
            <BurgerBtn onClick={handleOpenMenu} isMenuOpen={isMenuOpen} />
          </div>
        )}
        {token && (
          <div className={css.descktop}>
            <LogOut />
          </div>
        )}
      </header>
      {isMenuOpen && <MobileTabletMenu closeMenu={handleOpenMenu} />}
    </>
  );
}

export default Header;
