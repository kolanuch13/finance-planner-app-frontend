import { useState, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { ExpensesLimits } from 'components/CashflowPage/ExpensesLimits/ExpensesLimits';
import { TransactionDataList } from '../../components/CashflowPage/TransactionDataList/TransactionDataList';
import ModalAddIncome from '../../components/CashflowPage/ModalAddIncome/ModalAddIncome';
import { Container } from '../../components/Container/Container';
import css from './CashflowPage.module.css';

import cashflowOperations from 'redux/cashflowPage/cashflowPage-operations';
import { useNavigate } from 'react-router-dom';
import { Notify } from 'notiflix';

const CashflowPage = () => {
  const navigate = useNavigate();
  const [dailyLimit, setDailyLimit] = useState('');
  const [monthlyLimit, setMonthlyLimit] = useState('');
  const [formDataExpense, setFormDataExpense] = useState({
    category: '',
    categoryType: 'expense',
    comment: '',
    sum: '',
  });
  const [formDataIncome, setFormDataIncome] = useState({
    categoryType: 'income',
    sum: '',
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = useCallback(() => {
    setIsModalOpen(isModalOpen => !isModalOpen);
  }, [setIsModalOpen]);

  const dispatch = useDispatch();

  useEffect(() => {
    if (dailyLimit === '' || monthlyLimit === '') {
      dispatch(cashflowOperations.getCashflowLimits())
        .unwrap()
        .then(response => {
          setDailyLimit(response.data.limitDay);
          setMonthlyLimit(response.data.limitMonth);
        })
        .catch(error => console.error(error));
    }
  }, [dailyLimit, dispatch, monthlyLimit]);

  const handleSubmitAdd = e => {
    e.preventDefault();
    // eslint-disable-next-line default-case
    switch (e.target.id) {
      case 'expense':
        if (formDataExpense.sum === "") {
          Notify.warning('At first enter the sum of your expense.')
        } else {
          const expenseData = {
            category: formDataExpense.category?.toLowerCase(),
            sum: Number(+formDataExpense.sum),
            categoryType: formDataExpense.categoryType,
            comment: formDataExpense.comment,
          };
          dispatch(cashflowOperations.addTransaction(expenseData))
            .unwrap()
            .then(response => {
              return response;
            })
            .then(()=> Notify.success('Your expense was added!'))
            .catch(error => Notify.failure(error));
          if (isModalOpen) toggleModal();
          setFormDataExpense({
            category: '',
            categoryType: 'expense',
            comment: '',
            sum: 0,
          });
        }
        break;
      case 'income':
        const incomeData = {
          category: formDataIncome.category?.toLowerCase(),
          sum: Number(+formDataIncome.sum),
          categoryType: formDataIncome.categoryType,
          comment: formDataIncome.comment,
        };
        dispatch(cashflowOperations.addTransaction(incomeData))
          .unwrap()
          .then(response => {
            return response;
          })
          .then(()=> Notify.success('Your income was added!'))
          .catch(error => Notify.failure(error));
        if (isModalOpen) toggleModal();
        setFormDataIncome({
          categoryType: 'income',
          sum: 0,
        });
        break;
    }
    navigate('/statistics/transactions');
  };

  return (
    <main className={css.main}>
      <Container>
        <form onSubmit={handleSubmitAdd} className={css.form} id="expense">
          <TransactionDataList
            setFormData={setFormDataExpense}
            formData={formDataExpense}
          />
          <ExpensesLimits
            handleSubmitAdd={handleSubmitAdd}
            dailyLimit={dailyLimit}
            monthlyLimit={monthlyLimit}
            openModalAddIncome={toggleModal}
          />
        </form>
        {isModalOpen && (
          <ModalAddIncome
            handleSubmitAdd={handleSubmitAdd}
            closeModal={toggleModal}
            setFormData={setFormDataExpense}
            formData={formDataExpense}
          />
        )}
      </Container>
    </main>
  );
};

export default CashflowPage;
