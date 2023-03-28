import { useCallback, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { userBalance } from '../../../redux/auth/auth-selectors';
import css from './TransactionDataList.module.css';

export const TransactionDataList = ({setFormData, formData}) => {
  // const userBalance = useSelector(balance);
  // const isLoggedIn = useSelector(isLoggedIn);

  const category = ["Other", "Products", "Clothing and footwear"]

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      <label for="balance" className={css.label}>
        From account
      </label>
      <input
          id="balance"
          type="text"
          // value={userBalance}
          name="balance"
          readOnly
        />

      <label for="category" className={css.label}>Per category</label>
      <select
        id="category"
        name="category"
        onChange={handleChange}
        value={formData.category}
        >
          {category.map((el, i) => (
            <option key={i}>{el}</option>
          ))}
        </select>

      <label for="expenseComment" className={css.label}>
        Expense comment
      </label>
      <input
          id="expenseComment"
          className={css.input}
          type="text"
          value={formData.expenseComment}
          name="expenseComment"
          onChange={handleChange}
        />
      <label for="sum" className={css.label}>
        Sum
      </label>
      <input
        id="sum"
        type="text"
        onChange={handleChange}
        value={formData.sum}
        name="sum"
        required />
    </>
  );
};
