import axios from 'axios';

const getPersonalPlanAPI = async () => {
  return await axios.get('/personal');
}

const addPersonalPlanAPI = async event => {
  return await axios.post('/personal', event);
}

const addPersonalPlanPreAPI = async event => {
  return await axios.post('/personal/pre', event);
}

const currentPersonalPlanAPI = async event => {
  return await axios.put('/personal', event);
}

export const planAPI = {
  getPersonalPlanAPI,
  addPersonalPlanAPI,
  addPersonalPlanPreAPI,
  currentPersonalPlanAPI,
};


