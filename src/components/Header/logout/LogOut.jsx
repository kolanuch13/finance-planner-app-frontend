import { useDispatch } from 'react-redux';
import { logout } from '../../../redux/auth/auth-operations';
import { MdLogout } from 'react-icons/md'
import css from './LogOut.module.css';
import { useTranslation } from 'react-i18next';

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
        <MdLogout size={"14px"}/>
      </button>
    </div>
  );
}

export default LogOut;
