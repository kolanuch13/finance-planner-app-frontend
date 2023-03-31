import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { balance } from 'redux/auth/auth-selectors';
import css from './TransactionDataList.module.css';
import getAllCategories from '../../../helpers/category'
import {MdSetMeal,
  MdCheckroom, 
  MdRestaurant, 
  MdMedicalServices,
  MdSpa,
  MdCommute,
  MdHouse,
  MdMiscellaneousServices
} from 'react-icons/md';

export const TransactionDataList = ({ setFormData, formData }) => {
  const userBalance = useSelector(balance);
  const dispatch = useDispatch();
  const [category, setCategory] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState();
  const currentLang = localStorage.getItem('i18nextLng')
  const style = { color: '#3A6AF5', size: '15px' }
  const icons = [
    <MdSetMeal style={style}/>, 
    <MdCheckroom style={style}/>, 
    <MdRestaurant style={style}/>, 
    <MdMedicalServices style={style}/>,
    <MdSpa style={style}/>,
    <MdCommute style={style}/>,
    <MdHouse style={style}/>,
    <MdMiscellaneousServices style={style}/>
  ]
  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlerToggler = (e) => {
    e.currentTarget.classList.toggle(css.dropdownActive)
  }

  const handlerCategory = (e) => {
    setSelectedCategory(e.target.textContent)
  }

  useEffect(() => {
    currentLang === 'ru-UA'
    ? category.length || getAllCategories()
        .then(res => res.availableCategoriesEn)
        .then(list => {
          setCategory(list)
          setSelectedCategory(list[list.length-1])
        })
        .catch(error => console.error(error))
    : category.length || getAllCategories()
        .then(res => res.availableCategoriesUa)
        .then(list => {
          setCategory(list)
          setSelectedCategory(list[list.length-1])
        })
        .catch(error => console.error(error))
}, [category, currentLang, dispatch])

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
        <div className="container">
          <div 
            className={css.dropdown} 
            onClick={handlerToggler}
          >
            <input 
              className={css.textBox} 
              type="text" 
              readOnly 
              value={selectedCategory}
            />
            <div className={css.options} >
              {category.map((el, i) => (
                <div key={i} onClick={handlerCategory}>
                  {icons[i]}
                  {el}
                </div>
              ))}
            </div>
          </div>
        </div>
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
