import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import LogOut from '../logout/LogOut';
import css from './MobileTabletMenu.module.css';
import { useTranslation } from 'react-i18next';
import '../../../i18n';

const modalRoot = document.querySelector('#modal-root');

function MobileTabletMenu({ closeMenu, personalPlan }) {
  const token = useSelector(state => state.auth?.user.token);
  const { t } = useTranslation();

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      closeMenu();
    }
  };

  const handleClick = e => {
    if (personalPlan === null) {
      e.preventDefault();
    }
  };

  return createPortal(
    <>
      {token && (
          <div className={css.menu}>
            <NavLink
              className={({ isActive }) =>
              personalPlan !== null && isActive
                  ? css.NavLinkActive
                  : css.NavLink
              }
              to="/personal-plan"
            >
              {t('header.personalPlan')}
            </NavLink>
            <NavLink
              onClick={handleClick}
              className={({ isActive }) =>
                personalPlan !== null && isActive
                  ? css.NavLinkActive
                  : css.NavLink
              }
              to="/cashflow"
            >
              {t('header.cashFlow')}
            </NavLink>
            <NavLink
              onClick={handleClick}
              className={({ isActive }) =>
                personalPlan !== null && isActive
                  ? css.NavLinkActive
                  : css.NavLink
              }
              to="/dynamics"
              >
              {t('header.dynamics')}
            </NavLink>
            <LogOut />
          </div>
      )}
    </>,
    modalRoot
  );
}

export default MobileTabletMenu;
