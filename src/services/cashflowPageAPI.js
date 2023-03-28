import axios from 'axios';

axios.defaults.baseURL = 'https://localhost:4000/api';

const token = {
    set(token) {
      axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset() {
      axios.defaults.headers.common.Authorization = "";
    },
  };

export const addTransactionApi = async (transaction) => {
    try {
        const {data} = await axios.post("/cashflow", transaction);
        console.log(data);
        return data;
    } catch (er) {
        throw er
    }
}

export const getCashflowLimitsApi = async () => {
    try {
      const { data } = await axios.get("/dayLimit");// dayLimit
      return data;
    } catch (error) {
      throw error;
    }
  };

  export const getCategoriesApi = async () => {
    try {
      const { data } = await axios.get("/category");
      console.log(data);
      return data;
    } catch (error) {
      throw error;
    }
  };