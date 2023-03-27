//import { logOutThunk } from 'redux/auth/authThunk';
import logOutSvg from '../../../images/log-out.svg';
import css from './LogOut.module.css';

function LogOut() {
  return (
    <div>
      <button
        className={css.logOut}
        type="button"
        // onClick={() => dispatch(logOutThunk())}
      >
        <p className={css.text}>Log out</p>
        <img src={logOutSvg} alt="logout" className={css.logOutSvg} />
      </button>
    </div>
  );
}

export default LogOut;
