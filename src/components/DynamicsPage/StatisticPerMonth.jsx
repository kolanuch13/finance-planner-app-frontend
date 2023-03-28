import * as React from 'react';
import { Calendar } from '../Calendar/Calendar';

import css from './StatisticPerMonth.module.css';

const StatisticPerMonth = () => {
  return (
    <div className={css.statisticPerMonth}>
      <Calendar className={css.statCalender} />

      <div className={css.statisticBox}>
        <div className={css.statisticWrapper}>
          <p className={css.statTitle}>Income, &#8372;</p>
          <p className={css.statSum}>60 000</p>
        </div>
        <div className={css.statisticWrapper}>
          <p className={css.statTitle}>Expenses, &#8372;</p>
          <p className={css.statSum}>60 000</p>
        </div>
        <div className={css.statisticWrapper}>
          <p className={css.statTitle}>Accumulated, &#8372;</p>
          <p className={css.statSum}>60 000</p>
        </div>
        <div className={css.statisticWrapper}>
          <p className={css.statTitle}>Plan &#8372;</p>
          <p className={css.statSum}>60 000</p>
        </div>
        <div className={css.statisticWrapper}>
          <p className={css.statTitle}>Plan &#37;</p>
          <p className={css.statSum}>60 000</p>
        </div>
      </div>
    </div>
  );
};

export default StatisticPerMonth;
