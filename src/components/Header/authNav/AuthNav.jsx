import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';
import { useTranslation } from 'react-i18next';
import '../../../i18n';

function AuthMenu({ personalPlan }) {
  const { t } = useTranslation();

  const handleClick = e => {
    console.log(personalPlan);
    if (personalPlan === null) {
      e.preventDefault();
    }
  };

  return (
    <nav className={css.nav}>
      <div className={css.authBox}>
        <NavLink
          className={({ isActive }) =>
            personalPlan && isActive ? css.NavLinkActive : css.NavLink
          }
          to="/personal-plan"
        >
          {t('header.personalPlan')}
        </NavLink>
        <NavLink
          onClick={handleClick}
          className={({ isActive }) =>
            personalPlan && isActive ? css.NavLinkActive : css.NavLink
          }
          to="/cashflow"
        >
          {t('header.cashFlow')}
        </NavLink>
        <NavLink
          onClick={handleClick}
          className={({ isActive }) =>
            personalPlan && isActive ? css.NavLinkActive : css.NavLink
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
