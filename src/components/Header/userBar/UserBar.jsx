import { useNavigate } from 'react-router-dom';

import { useSelector } from 'react-redux';
import barSvg from '../../../images/bar-graph.svg';
import css from './UserBar.module.css';

export const UserBar = () => {
  const userNickName = useSelector(state => state.auth?.user?.userName);

  const navigate = useNavigate();
  const statisticsClick = () => {
    navigate('/statistics', { replace: true });
  };

  return (
    <div className={css.userMenu}>
      <button type="button" className={css.statistic} onClick={statisticsClick}>
        <img src={barSvg} alt="statistic" />
      </button>
      <p className={css.nickName}>{userNickName[0]}</p>
    </div>
  );
};
