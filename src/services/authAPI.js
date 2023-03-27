import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:4000/api';

const register = async user => {
  return await axios.post('/auth/register', user);
};

const login = async user => {
  return await axios.post('/auth/login', user);
};

const logout = async () => {
  return await axios.post('/auth/logout');
};

const currentUser = async () => {
  const { data } = await axios.get('/auth/current');
  return data;
};

const updateBalance = async () => {
  const { data } = await axios.patch('/auth/balance');
  return data;
};

const authAPI = {
  register,
  login,
  logout,
  currentUser,
  updateBalance,
};
export default authAPI;
