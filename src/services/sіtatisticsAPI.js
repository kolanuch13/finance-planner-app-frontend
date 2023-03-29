import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:4000/api';

const categoryTypeStatistic = async () => {
  return await axios.get('/statistic/by-category');
};

const expenseStatistic = async () => {
  return await axios.get('/statistic/by-expense?year=2023&month=03');
};

const removeExpense = async transactionId => {
  return await axios.delete(`/transaction/${transactionId}`);
};

const updateTransaction = async transactionId => {
  return await axios.patch(`/transaction/${transactionId}`);
};

const statiaticsAPI = {
  categoryTypeStatistic,
  expenseStatistic,
  removeExpense,
  updateTransaction,
};
export default statiaticsAPI;
