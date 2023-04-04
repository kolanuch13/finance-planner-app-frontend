import { useState, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { ExpensesLimits } from 'components/CashflowPage/ExpensesLimits/ExpensesLimits';
import { TransactionDataList } from '../../components/CashflowPage/TransactionDataList/TransactionDataList';
import ModalAddIncome from '../../components/CashflowPage/ModalAddIncome/ModalAddIncome';
import { Container } from '../../components/Container/Container';
import css from './CashflowPage.module.css';

import cashflowOperations from 'redux/cashflowPage/cashflowPage-operations';

const CashflowPage = () => {
  const [dailyLimit, setDailyLimit] = useState('');
  const [monthlyLimit, setMonthlyLimit] = useState('');
  const [formData, setFormData] = useState({
    category: '',
    categoryType: 'expense',
    comment: '',
    sum: 0,
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = useCallback(() => { setIsModalOpen(isModalOpen => !isModalOpen)}, [setIsModalOpen]);

  const dispatch = useDispatch();

  useEffect(() => {
    if(dailyLimit==='' || monthlyLimit=== '') {
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
    const newData = {
      category: formData.category?.toLowerCase(),
      sum: Number(+formData.sum),
      categoryType: formData.categoryType,
      comment: formData.comment,
    }
    dispatch(cashflowOperations.addTransaction(newData))
      .unwrap()
      .then(response => {
        return response;
      })
      .catch(error => console.error(error));
    if(isModalOpen) toggleModal();
    setFormData({
      category: '',
      categoryType: 'expense',
      comment: '',
      sum: 0,
    });
    dispatch(cashflowOperations.getCashflowLimits())
    .unwrap()
    .then(response => {
      setDailyLimit(response.data.limitDay);
      setMonthlyLimit(response.data.limitMonth);
    })
    .catch(error => console.error(error));
  };

  return (
    <main className={css.main}>
      <Container>
        <form onSubmit={handleSubmitAdd} className={css.form}>
          <TransactionDataList setFormData={setFormData} formData={formData} />
          <ExpensesLimits
            handleSubmitAdd={handleSubmitAdd}
            dailyLimit={dailyLimit}
            monthlyLimit={monthlyLimit}
            openModalAddIncome={toggleModal}
          />
        </form>
        {isModalOpen && <ModalAddIncome handleSubmitAdd={handleSubmitAdd} closeModal={toggleModal} setFormData={setFormData} formData={formData}/>}
      </Container>
    </main>
  );
};

export default CashflowPage;