import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { balance } from 'redux/auth/auth-selectors';
import cashflowOperations from 'redux/cashflowPage/cashflowPage-operations';
import css from './TransactionDataList.module.css';
// import Select from 'react-select'
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import * as icon from 'react-icons/md';

export const TransactionDataList = ({ setFormData, formData }) => {
  const userBalance = useSelector(balance);
  const dispatch = useDispatch();
  const [category, setCategory] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState();

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
      response.data.availableCategoriesEn.map(item => {
        return setCategory((oldArray) => {
            return [...oldArray, {
              value: item.label, 
              label: item.label, 
              image: item.image,
            }]
        })
    })
      console.log(category[category.length-1]);
    })
  .catch(error => console.error(error))}, [])
    

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
        <Select
          variant="standard"
          labelId="category"
          id="category"
          value={selectedCategory}
          onChange={e=>setSelectedCategory(e.target.value)}
          defaultValue={category[category.length-1]}
          sx={{
            border: 'none',
            width: '100%',
            margin: '0',
            padding: '0',
            color: '#F3F3F3',
            fontFamily: 'Lato',
            fontSize: '16px',
            lineHeight: '1.19',
            backgroundColor: 'none'
          }}
        >
          {category.map((el, i) => (
            <MenuItem key={i} value={el.value}
            sx={{
              borderRadius: '16px'
            }}
            >
              <div 
                className="Container" 
                dangerouslySetInnerHTML={{__html: `<Md${el.image}`}}
              ></div>
              {el.label}
            </MenuItem>
          ))}
        </Select>
        {/* <NativeSelect 
          id="select"
          sx={{
            border: 'none',
            width: '100%',
            margin: '0',
            padding: '0',
            color: '#F3F3F3',
            fontFamily: 'Lato',
            fontSize: '16px',
            lineHeight: '1.19',
            backgroundColor: 'none'
          }}
        >
        {category.map((el, i) => (
            <option key={i} value={el.value}>{el.label}</option>
          ))}
        </NativeSelect> */}
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
