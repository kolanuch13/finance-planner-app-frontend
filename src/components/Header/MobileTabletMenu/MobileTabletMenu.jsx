import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import css from './MobileTabletMenu.module.css';

const modalRoot = document.querySelector('#modal-root');

function MobileTabletMenu({ closeMenu }) {
  const token = useSelector(state => state.auth?.token);

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

  return createPortal(
    <>
      {token && (
        <div className={css.menu}>
          <NavLink
            className={({ isActive }) =>
              isActive ? css.NavLinkActive : css.NavLink
            }
            to="/plan"
          >
            Personal plan
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? css.NavLinkActive : css.NavLink
            }
            to="/cash-flow"
          >
            Cashflow
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? css.NavLinkActive : css.NavLink
            }
            to="/dynamics"
          >
            Dynamics
          </NavLink>
        </div>
      )}
    </>,
    modalRoot
  );
}

export default MobileTabletMenu;
