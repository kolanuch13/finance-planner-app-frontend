import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import cashflowOperations from 'redux/cashflowPage/cashflowPage-operations';
import css from './ExpensesLimits.module.css';

export const ExpensesLimits = ({handleSubmitAdd}) => {
  const [dailyLimit, setDailyLimit] = useState('');
  const [monthlyLimit, setMonthlyLimit] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(cashflowOperations.getCashflowLimits())
      .unwrap()
      .then(response => {
        // console.log(response.data);
        setDailyLimit(response.data.limitDay)
        setMonthlyLimit(response.data.limitMonth)
      })
    .catch(error => console.error(error));
  }, [dispatch])

  return (
    <div className={css.inputsWrapper}>
      <input
        className={css.input}
        type="text"
        value={dailyLimit}
        name="dailyLimit"
        id="dailyLimit"
        readOnly
      />
      <label htmlFor="dailyLimit" className={css.label}>
        Daily limit
      </label>
      <input
        className={css.input}
        type="text"
        value={monthlyLimit}
        name="monthlyLimit"
        id="monthlyLimit"
        readOnly
      />
      <label htmlFor="monthlyLimit" className={css.label}>
        Monthly limit
      </label>
      <button type="submit" className={css.btnReady} onSubmit={handleSubmitAdd}>
        Ready
      </button>
      <button type="button" className={css.btnAdd}>
        Add income
      </button>
    </div>
  );
};
