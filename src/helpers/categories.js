import axios from 'axios';

const getAllCategories = async () => {
  try {
    const { data } = await axios('/category');
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

export default getAllCategories;
