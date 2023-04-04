import axios from 'axios';

const categoryTypeStatistic = async () => {
  return await axios.get('/statistic/by-category');
};

const expenseStatistic = async period => {
  const { year, month, page = 1, limit = 6 } = period;
  return await axios.get(
    `/statistic/by-expense?year=${year}&month=${month}&page=${page}&limit=${limit}`
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

export const statisticsAPI = {
  categoryTypeStatistic,
expenseStatistic,
categoriesStatistic,
removeExpense,
updateTransaction
}

