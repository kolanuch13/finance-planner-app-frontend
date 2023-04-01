import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { balance } from 'redux/auth/auth-selectors';
import css from './TransactionDataList.module.css';
import getAllCategories from '../../../helpers/categories'
import {
  MdSetMeal,
  MdCheckroom, 
  MdRestaurant, 
  MdMedicalServices,
  MdSpa,
  MdCommute,
  MdHouse,
  MdMiscellaneousServices
} from 'react-icons/md';
import { useTranslation } from 'react-i18next';
import '../../../i18n';

export const TransactionDataList = ({ setFormData, formData }) => {
  const userBalance = useSelector(balance);
  const [category, setCategory] = useState([]);
  const style = { color: '#3A6AF5', size: '15px' };
  const currentLanguage = localStorage.getItem('i18nextLng');
  const { t } = useTranslation();
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
    formData.category = e.target.textContent;
    handleChange(e)
  }
  
  useEffect(() => {
    currentLanguage === 'ua'
    ? getAllCategories()
        .then(res => res.availableCategoriesUa)
        .then(list => {
          setCategory(list)
          formData.category = list[list.length-1]
        })
        .catch(error => console.error(error))
    : getAllCategories()
        .then(res => res.availableCategoriesEn)
        .then(list => {
          setCategory(list)
          formData.category = list[list.length-1]
        })
        .catch(error => console.error(error))
}, [currentLanguage])

  return (
    <div className={css.wrapper}>
      <div className={css.inputWrapper}>
        <label htmlFor="balance" className={css.label}>
          {t('cashFlow.from')}
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
        {t('cashFlow.category')}
        </label>
        <div className="container">
          <div 
            className={css.dropdown} 
            onClick={handlerToggler}
          >
            <input 
              id="category"
              className={css.textBox} 
              type="text" 
              value={formData.category}
              name="category"
              onChange={handleChange}
              readOnly
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
        <label htmlFor="comment" className={css.label}>
        {t('cashFlow.comment')}
        </label>
        <input
          id="comment"
          className={css.input}
          type="text"
          onChange={handleChange}
          value={formData.comment}
          name="comment"
          placeholder={t('cashFlow.placeholderComment')}
        />
      </div>
      <div className={css.inputWrapper}>
        <label htmlFor="sum" className={css.label}>
          {t('cashFlow.sum')}
        </label>
        <input
          className={css.input}
          id="sum"
          type="number"
          onChange={handleChange}
          value={formData.sum}
          name="sum"
          required
          placeholder="Enter sum"
        />
      </div>
    </div>
  );
};