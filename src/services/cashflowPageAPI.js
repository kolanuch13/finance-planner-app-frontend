import axios from 'axios';

const addTransactionApi = async (transaction) => {
  return await axios.post("/transaction", transaction); 
}

const getCashflowLimitsApi = async () => {
  return await axios.get("/dayLimit");
};

const getCategoriesApi = async () => {
    return await axios.get("/category");
};

export const cashflowAPI = {
  addTransactionApi,
  getCashflowLimitsApi,
  getCategoriesApi,
};