import { useState } from 'react';
import { ExpensesLimits } from '../../components/CashflowPage/ExpensesLimits/ExpensesLimits';
import { TransactionDataList } from '../../components/CashflowPage/TransactionDataList/TransactionDataList';
// import {ModalAddIncome} from '../../components/CashflowPage/ModalAddIncome';
import {Container} from '../../components/Container/Container';
import css from './CashflowPage.module.css';

export const CashflowPage = () => {
  const [formData, setFormData] = useState({
    category: '',
    categoryType: 'expense',
    expenseComment: '',
    sum: '',
  });

  const handleSubmit = event => {
    event.preventDefault();
    console.log(formData);

    setFormData({
      category: '',
      expenseComment: '',
      sum: '',
    });
  };

  return (
    <main className={css.main}>
      <Container>
        <form onSubmit={handleSubmit} className={css.form}>
          <TransactionDataList setFormData={setFormData} formData={formData} />
          {/* <ExpensesLimits /> */}
          {/* <ModalAddIncome /> */}
        </form>
      </Container>
    </main>
  );
};
