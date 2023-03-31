import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';
import { useTranslation } from 'react-i18next';
import '../../../i18n';

function AuthMenu() {
  const { t } = useTranslation();

  return (
    <nav>
      <div className={css.authBox}>
        <NavLink
          className={({ isActive }) =>
            isActive ? css.NavLinkActive : css.NavLink
          }
          to="/personal-plan"
        >
          {t('header.personalPlan')}
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? css.NavLinkActive : css.NavLink
          }
          to="/cashflow"
        >
          {t('header.cashFlow')}
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? css.NavLinkActive : css.NavLink
          }
          to="/dynamics"
        >
          {t('header.dynamics')}
        </NavLink>
      </div>
    </nav>
  );
}

export default AuthMenu;
