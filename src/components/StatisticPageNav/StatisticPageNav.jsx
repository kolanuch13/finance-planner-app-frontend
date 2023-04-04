import { useState, Suspense } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, Outlet } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import statisticsOperations from 'redux/statistics/statistics-operations';
import { Calendar } from 'components/Calendar/Calendar';
import css from './StatisticPage.module.css';
import Loader from 'components/Loader/Loader';

const StatisticPageNav = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
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
      <div className={css.navWrapper}>
        <nav>
          <div className={css.navThumb}>
            <li>
              <NavLink
                to="transactions"
                end
                className={({ isActive }) => (isActive ? css.active : css.link)}
              >
                {t('expenses.expensesTitle')}
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? css.active : css.link)}
                to="categories"
              >
                {t('expenses.categoriesTitle')}
              </NavLink>
            </li>
          </div>
        </nav>
        <div className={css.calendarWrapper}>
          <Calendar onChange={handleGetInfoPerMonth} />
        </div>
      </div>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default StatisticPageNav;
