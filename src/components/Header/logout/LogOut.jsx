import { useDispatch } from 'react-redux';
import { logout } from '../../../redux/auth/auth-operations';
import logOutSvg from '../../../images/log-out.svg';
import css from './LogOut.module.css';
import { useTranslation } from 'react-i18next';
import '../../../i18n';

function LogOut() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  return (
    <div className={css.logoutBtn}>
      <button
        className={css.logOut}
        type="button"
        onClick={() => dispatch(logout())}
      >
        <p className={css.text}>{t('logOut.logOutButton')}</p>
        <img src={logOutSvg} alt="logout" className={css.logOutSvg} />
      </button>
    </div>
  );
}

export default LogOut;
