import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:4000/api';

const yearInfo = async () => {
  return await axios.get('/dynamic/chart');
};

const statisticInfo = async date => {
  return await axios.post('/dynamic/statistic', date);
};

const updateImage = async file => {
  return await axios.patch('/dynamic/flatImage', file);
};

const dynamicAPI = {
  yearInfo,
  statisticInfo,
  updateImage,
};

export default dynamicAPI;
