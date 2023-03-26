import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import css from './StatisticPerMonth.module.css';

const StatisticPerMonth = () => {
  const now = dayjs();

  return (
    <div className={css.statisticPerMonth}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={['DatePicker']}>
          <DatePicker
            label={'Month'}
            views={['month', 'year']}
            defaultValue={now}
          />
        </DemoContainer>
      </LocalizationProvider>

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
