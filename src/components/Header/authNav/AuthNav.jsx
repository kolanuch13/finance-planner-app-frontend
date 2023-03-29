import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';

function AuthMenu() {
  // const token = useSelector(state => state.auth?.token);

  return (
    <nav>
      <div className={css.authBox}>
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
    </nav>
  );
}

export default AuthMenu;
