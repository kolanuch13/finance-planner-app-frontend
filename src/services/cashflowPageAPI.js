import axios from 'axios';

axios.defaults.baseURL = 'https://localhost:4000/api';

export const addTransactionApi = async (transaction) => {
  return await axios.post("/transaction", transaction); 
}

export const getCashflowLimitsApi = async () => {
  return await axios.get("/dayLimit");// dayLimit
};

export const getCategoriesApi = async () => {
    return = await axios.get("/category");
};