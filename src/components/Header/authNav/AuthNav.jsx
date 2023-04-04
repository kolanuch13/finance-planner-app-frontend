import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';
import { useTranslation } from 'react-i18next';
import { ROUTES } from 'utils/constants';

function AuthMenu({ personalPlan }) {
  const { t } = useTranslation();

  const handleClick = e => {
    if (personalPlan === null) {
      e.preventDefault();
    }
  };

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
