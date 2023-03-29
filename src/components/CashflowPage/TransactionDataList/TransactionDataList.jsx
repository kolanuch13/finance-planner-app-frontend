import { useCallback, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { userBalance } from '../../../redux/auth/auth-selectors';
import css from './TransactionDataList.module.css';

export const TransactionDataList = ({ setFormData, formData }) => {
  // const userBalance = useSelector(balance);
  // const isLoggedIn = useSelector(isLoggedIn);

  const category = ['Other', 'Products', 'Clothing and footwear'];

const options = [
  {value: "other", label: "Other"},
  {value: "products", label: "Products"},
  {value: "clothing-and-footwear", label: "Clothing and footwear"},
]

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      <div className={css.inputWrapper}>
        <label htmlFor="balance" className={css.label}>
          From account
        </label>
        <input
        className={css.input}
          id="balance"
          type="text"
          // value={userBalance}
          name="balance"
          readOnly
        />
      </div>
      <p>Per category</p>
      <div className={css.inputWrapper}>
        <label htmlFor="category" className={css.label}>
          Per category
        </label>
        <select
          className={css.input}
          id="category"
          name="category"
          onChange={handleChange}
          value={formData.category}
        >
          {category.map((el, i) => (
            <option key={i}>{el}</option>
          ))}
        </select>
      </div>
      <div className={css.inputWrapper}>
        <label htmlFor="expenseComment" className={css.label}>
          Expense comment
        </label>
        <input
          id="expenseComment"
          className={css.input}
          type="text"
          value={formData.expenseComment}
          name="expenseComment"
          onChange={handleChange}
          placeholder="Enter text"
        />
      </div>
      <div className={css.inputWrapper}>
        <label htmlFor="sum" className={css.label}>
          Sum
        </label>
        <input
          className={css.input}
          id="sum"
          type="text"
          onChange={handleChange}
          value={formData.sum}
          name="sum"
          required
          placeholder="Enter sum"
        />
      </div>
    </>
  );
};
