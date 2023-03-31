import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { balance } from 'redux/auth/auth-selectors';
import cashflowOperations from 'redux/cashflowPage/cashflowPage-operations';
import css from './TransactionDataList.module.css';


export const TransactionDataList = ({ setFormData, formData }) => {
  const userBalance = useSelector(balance);
  const dispatch = useDispatch();
  const [category, setCategory] = useState([]);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {dispatch(cashflowOperations.getCategories())
    .unwrap()
    .then(response => {
      setCategory(response.data);
    })
  .catch(error => console.error(error))}, [dispatch])
    

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
          value={userBalance}
          name="balance"
          readOnly
        />
      </div>
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
