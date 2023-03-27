import React from 'react';
// import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import css from './UserNav.module.css';

function Navigation(props) {
  //   const token = useSelector(state => state.auth?.token);

  return (
    <div>
      <nav>
        <div className={css.userNav}>
          <NavLink to="/login">
            <button type="button" className={css.login}>
              Log in
            </button>
          </NavLink>

          <NavLink to="/register">
            <button type="button" className={css.register}>
              Registration
            </button>
          </NavLink>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
