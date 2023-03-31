import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:4000/api';

const categoryTypeStatistic = async () => {
  return await axios.get('/statistic/by-category');
};

const expenseStatistic = async period => {
  console.log(period);
  return await axios.get(
    `/statistic/by-expense?year=${period.year}&month=${period.month}`
  );
};

const categoriesStatistic = async period => {
  return await axios.get(
    `/statistic/by-category?year=${period.year}&month=${period.month}`
  );
};

const removeExpense = async transactionId => {
  return await axios.delete(`/transaction/${transactionId}`);
};

const updateTransaction = async (idTransaction, data) => {
  return await axios.patch(`/transaction/${idTransaction}`, data);
};

const statisticsAPI = {
  categoryTypeStatistic,
  expenseStatistic,
  categoriesStatistic,
  removeExpense,
  updateTransaction,
};
export default statisticsAPI;
