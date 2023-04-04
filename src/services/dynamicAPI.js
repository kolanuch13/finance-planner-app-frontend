import axios from 'axios';

const yearInfo = async () => {
  return await axios.get('/dynamic/chart');
};

const statisticInfo = async date => {
  return await axios.post('/dynamic/statistic', date);
};

const updateImage = async file => {
  return await axios.patch('/dynamic/flatImage', file);
};

const getImage = async () => {
  return await axios.get('/dynamic/flatImage');
};

export const dynamicAPI = {
  yearInfo,
  statisticInfo,
  updateImage,
  getImage,
};
