import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:4000/api';

const categoryTypeStatistic = async () => {
  return await axios.get('/statistic/by-category');
};

const expenseStatistic = async () => {
  return await axios.get('/statistic/by-expense');
};

const statiaticsAPI = {
  categoryTypeStatistic,
  expenseStatistic,
};
export default statiaticsAPI;
