import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import barSvg from '../../../images/bar-graph.svg';
import css from './UserBar.module.css';
import { getUser } from 'redux/auth/auth-selectors';

export const UserBar = ({ personalPlan }) => {
  const userNickName = useSelector(getUser);

  const navigate = useNavigate();
  const statisticsClick = () => {
    personalPlan && navigate('/statistics/transactions', { replace: true });
  };

  return (
    <div className={css.userMenu}>
      <button type="button" className={css.statistic} onClick={statisticsClick}>
        <img src={barSvg} alt="statistic" />
      </button>
      <p className={css.nickName}>{userNickName.name[0] || 'username'}</p>
    </div>
  );
};
