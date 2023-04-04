import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Calendar } from '../Calendar/Calendar';
import { dynamicSelectors, dynamicOperation } from 'redux/dynamics';
import { useTranslation } from 'react-i18next';

import css from './StatisticPerMonth.module.css';

const StatisticPerMonth = () => {
  const { t } = useTranslation();
  const {
    incomeSumPerSelectedMonth,
    expenseSumPerSelectedMonth,
    acumulatedSumPerSelectedMonth,
    planMoneyPerMonth,
    percentagePlanPerMonth,
  } = useSelector(dynamicSelectors.getStatisticData);

  const dispatch = useDispatch();

  const handleGetInfoPerMonth = date => {
    const month = new Date(date).getMonth() + 1;
    const year = new Date(date).getFullYear();

    dispatch(dynamicOperation.staticInfoThunk({ month, year }));
  };

  return (
    <div className={css.statisticPerMonth}>
      <Calendar onChange={handleGetInfoPerMonth} />
      <div className={css.statisticBox}>
        <div className={css.statisticWrapper}>
          <p className={css.statTitle}>{t('dynamics.income')}, &#8372;</p>
          <p className={css.statSum}>
            {incomeSumPerSelectedMonth ? incomeSumPerSelectedMonth : 0}
          </p>
        </div>
        <div className={css.statisticWrapper}>
          <p className={css.statTitle}>{t('dynamics.expenses')}, &#8372;</p>
          <p className={css.statSum}>
            {expenseSumPerSelectedMonth ? expenseSumPerSelectedMonth : 0}
          </p>
        </div>
        <div className={css.statisticWrapper}>
          <p className={css.statTitle}>{t('dynamics.accumulated')}, &#8372;</p>
          <p className={css.statSum}>
            {acumulatedSumPerSelectedMonth ? acumulatedSumPerSelectedMonth : 0}
          </p>
        </div>
        <div className={css.statisticWrapper}>
          <p className={css.statTitle}>{t('dynamics.plan')} &#8372;</p>
          <p className={css.statSum}>{planMoneyPerMonth}</p>
        </div>
        <div className={css.statisticWrapper}>
          <p className={css.statTitle}>{t('dynamics.plan')} &#37;</p>
          <p className={css.statSum}>{percentagePlanPerMonth}0</p>
        </div>
      </div>
    </div>
  );
};

export default StatisticPerMonth;
