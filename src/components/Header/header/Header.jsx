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
import { selectorPlanData } from 'redux/plan/plan-selectors';

function Header() {
  const token = useSelector(state => state.auth?.user.token);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const newPlanData = useSelector(selectorPlanData);

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
        {token && (
          <div className={css.authMenu}>
            <AuthMenu personalPlan={newPlanData} />
          </div>
        )}
        <Logo />

        <div className={css.navigationBox}>
          <Navigation personalPlan={newPlanData} />
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
