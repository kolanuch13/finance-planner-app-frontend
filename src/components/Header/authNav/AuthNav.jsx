import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';
import { useTranslation } from 'react-i18next';
import { ROUTES } from 'utils/constants';
import { Notify } from 'notiflix';
import { useEffect } from 'react';
import { getPersonalPlan } from 'redux/plan/plan-operations';
import { useDispatch } from 'react-redux';

function AuthMenu({ personalPlan }) {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const handleClick = e => {
    if (personalPlan === null) {
      e.preventDefault();
      Notify.info('Enter you personal plan');
    }
  };

  useEffect(() => {
    dispatch(getPersonalPlan());
  }, [dispatch]);

  return (
    <nav className={css.nav}>
      <div className={css.authBox}>
        <NavLink
          className={({ isActive }) =>
            personalPlan !== null && isActive ? css.NavLinkActive : css.NavLink
          }
          to={ROUTES.personalPlan}
        >
          {t('header.personalPlan')}
        </NavLink>
        <NavLink
          onClick={handleClick}
          className={({ isActive }) =>
            personalPlan !== null && isActive ? css.NavLinkActive : css.NavLink
          }
          to={ROUTES.cashflow}
        >
          {t('header.cashFlow')}
        </NavLink>
        <NavLink
          onClick={handleClick}
          className={({ isActive }) =>
            personalPlan !== null && isActive ? css.NavLinkActive : css.NavLink
          }
          to={ROUTES.dynamics}
        >
          {t('header.dynamics')}
        </NavLink>
      </div>
    </nav>
  );
}

export default AuthMenu;
