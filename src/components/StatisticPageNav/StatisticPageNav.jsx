import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, Outlet } from 'react-router-dom';
import statisticsOperations from 'redux/statistics/statistics-operations';
import { Calendar } from 'components/Calendar/Calendar';

const StatisticPageNav = () => {
  const dispatch = useDispatch();
  // eslint-disable-next-line
  const [period, setPeriod] = useState(
    JSON.parse(localStorage.getItem('selectedPeriod')) ?? ''
  );

  const handleGetInfoPerMonth = date => {
    const month = new Date(date).getMonth() + 1;
    const year = new Date(date).getFullYear();
    const period = { month, year };
    setPeriod(localStorage.setItem('selectedPeriod', JSON.stringify(period)));

    dispatch(statisticsOperations.expenseStatistic({ month, year }));
    dispatch(statisticsOperations.categoryStatistic({ month, year }));
  };

  return (
    <>
      <NavLink to="transactions" end>
        Expenses
      </NavLink>
      <NavLink to="categories">Categories</NavLink>
      <Calendar onChange={handleGetInfoPerMonth} />
      <Outlet />
    </>
  );
};

export default StatisticPageNav;
