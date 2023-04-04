import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import barSvg from '../../../images/bar-graph.svg';
import css from './UserBar.module.css';
import { nickName } from 'redux/auth/auth-selectors';

export const UserBar = ({ personalPlan }) => {
  const userNickName = useSelector(nickName);

  const navigate = useNavigate();
  const statisticsClick = () => {
    personalPlan && navigate('/statistics/transactions', { replace: true });
  };
  return (
    <div className={css.userMenu}>
      <button type="button" className={css.statistic} onClick={statisticsClick}>
        <img src={barSvg} alt="statistic" />
      </button>
      {userNickName && <p className={css.nickName}>{userNickName[0]}</p>}
    </div>
  );
};
