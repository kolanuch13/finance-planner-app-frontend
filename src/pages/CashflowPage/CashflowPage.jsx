import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ExpensesLimits } from 'components/CashflowPage/ExpensesLimits/ExpensesLimits';
import { TransactionDataList } from '../../components/CashflowPage/TransactionDataList/TransactionDataList';
// import {ModalAddIncome} from '../../components/CashflowPage/ModalAddIncome';
import {Container} from '../../components/Container/Container';
import css from './CashflowPage.module.css';

import cashflowOperations from 'redux/cashflowPage/cashflowPage-operations';


export const CashflowPage = () => {
  const [dailyLimit, setDailyLimit] = useState('');
  const [monthlyLimit, setMonthlyLimit] = useState('');
  const [formData, setFormData] = useState({
    category: '',
    categoryType: 'expense',
    comment: '',
    sum: 0,
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(cashflowOperations.getCashflowLimits())
      .unwrap()
      .then(response => {
        setDailyLimit(response.data.limitDay)
        setMonthlyLimit(response.data.limitMonth)
      })
    .catch(error => console.error(error));
  }, [dispatch])

  const handleSubmitAdd = e => {
    e.preventDefault()
    const newData = {
      category: formData.category.toLowerCase(),
      sum: Number(+formData.sum),
      categoryType: formData.categoryType,
      comment: formData.expenseComment,
    }
    dispatch(cashflowOperations.addTransaction(newData))
      .unwrap()
      .then(response => {
        console.log(response);
        return response;
      })
    .catch(error => console.error(error));
    setFormData({
      category: '',
      categoryType: 'expense',
      comment: '',
      sum: 0,
    })
  }

  return (
    <main className={css.main}>
      <Container>
        <form onSubmit={handleSubmitAdd} className={css.form}>
          <TransactionDataList setFormData={setFormData} formData={formData} />
          <ExpensesLimits 
            handleSubmitAdd={handleSubmitAdd}
            dailyLimit={dailyLimit}
            monthlyLimit={monthlyLimit}
          />
          {/* <ModalAddIncome /> */}
        </form>
      </Container>
    </main>
  );
};
