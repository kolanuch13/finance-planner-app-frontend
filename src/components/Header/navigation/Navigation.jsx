import AuthMenu from '../authNav/AuthNav';
import UserNavigation from '../userNav/UserNav';
import { useSelector } from 'react-redux';
import css from './Navigation.module.css';

function Navigation() {
  const token = useSelector(state => state.auth?.token);

  return (
    <div className={css.navigate}>
      {!token && (
        <div className={css.authNav}>
          <UserNavigation />
        </div>
      )}
      {token && (
        <div className={css.userNav}>
          <AuthMenu />
        </div>
      )}
    </div>
  );
}

export default Navigation;
