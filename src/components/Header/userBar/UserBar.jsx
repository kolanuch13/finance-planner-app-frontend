import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import barSvg from '../../../images/bar-graph.svg';
import css from './UserBar.module.css';
import { getUser } from 'redux/auth/auth-selectors';

export const UserBar = ({balance}) => {
  const userNickName = useSelector(getUser);

  const navigate = useNavigate();
  const statisticsClick = () => {
    balance && navigate('/statistics/transactions', { replace: true });
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
