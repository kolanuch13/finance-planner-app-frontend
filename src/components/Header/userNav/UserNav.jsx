import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './UserNav.module.css';
import { useTranslation } from 'react-i18next';
import '../../../i18n';

function UserNavigation(props) {
  const { t } = useTranslation();

  return (
    <div>
      <nav>
        <div className={css.userNav}>
          <NavLink to="/login">
            <button type="button" className={css.login}>
              {t('login.title')}
            </button>
          </NavLink>

          <NavLink to="/register">
            <button type="button" className={css.register}>
              {t('registration.title')}
            </button>
          </NavLink>
        </div>
      </nav>
    </div>
  );
}

export default UserNavigation;
