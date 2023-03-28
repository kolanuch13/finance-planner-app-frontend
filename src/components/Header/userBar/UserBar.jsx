import { useSelector, useDispatch } from 'react-redux';
import barSvg from '../../../images/bar-graph.svg';
import css from './UserBar.module.css';

export const UserBar = () => {
  const userNickName = useSelector(state => state.auth?.user?.username);
  const dispatch = useDispatch();

  return (
    <div className={css.userMenu}>
      <button type="button" className={css.statistic}>
        <img src={barSvg} alt="statistic" />
      </button>
      <p className={css.nickName}>{userNickName}</p>
    </div>
  );
};
