import axios from 'axios';

const register = async user => {
  return await axios.post('/auth/register', user);
};

const login = async user => {
  return await axios.post('/auth/login', user);
};

const verify = async data => {
  return await axios.get(`/auth/verify/${data.verificationToken}`, data);
};

const logout = async () => {
  return await axios.post('/auth/logout');
};

const currentUser = async () => {
  const { data } = await axios.get('/auth/current');
  return data;
};

const balance = async (balance) => {
  const { data } = await axios.patch('/auth/balance', balance);
  return data;
};

const authAPI = {
  register,
  login,
  verify,
  logout,
  currentUser,
  balance,
};
export default authAPI;
