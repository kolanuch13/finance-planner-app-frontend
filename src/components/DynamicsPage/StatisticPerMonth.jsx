import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { MONTH } from '../../utils/constants';
const StatisticPerMonth = () => {
  const currentMonth = new Date().getMonth() + 1;
  const getCurrentMonth = MONTH.getKeyByValue(currentMonth);

  return (
    <>
      <DatePicker label={getCurrentMonth} views={['month', 'year']} />
      <div>
        <div>
          <p>Income, &#8372;</p>
          <p>60 000</p>
        </div>
        <div>
          <p>Expenses, &#8372;</p>
          <p>60 000</p>
        </div>
        <div>
          <p>Accumulated, &#8372;</p>
          <p>60 000</p>
        </div>
        <div>
          <p>Plan &#8372;</p>
          <p>60 000</p>
        </div>
        <div>
          <p>Plan &#37;</p>
          <p>60 000</p>
        </div>
      </div>
    </>
  );
};

export default StatisticPerMonth;
