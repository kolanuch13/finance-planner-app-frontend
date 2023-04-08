import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { balance } from 'redux/auth/auth-selectors';
import css from './TransactionDataList.module.css';
import getAllCategories from 'helpers/categories';
import {
  MdSetMeal,
  MdCheckroom,
  MdRestaurant,
  MdMedicalServices,
  MdSpa,
  MdCommute,
  MdHouse,
  MdMiscellaneousServices,
} from 'react-icons/md';
import { useTranslation } from 'react-i18next';

export const TransactionDataList = ({ setFormData, formData }) => {
  const userBalance = useSelector(balance);
  const [category, setCategory] = useState([]);
  const style = { color: '#3A6AF5', size: '15px' };
  const currentLanguage = localStorage.getItem('i18nextLng');
  const { t } = useTranslation();
  const icons = [
    <MdSetMeal style={style} />,
    <MdCheckroom style={style} />,
    <MdRestaurant style={style} />,
    <MdMedicalServices style={style} />,
    <MdSpa style={style} />,
    <MdCommute style={style} />,
    <MdHouse style={style} />,
    <MdMiscellaneousServices style={style} />,
  ];

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlerToggler = e => {
    e.currentTarget.classList.toggle(css.dropdownActive);
  };

  const handlerCategory = e => {
    formData.category = e.target.textContent;
    handleChange(e);
  };

  useEffect(() => {
    currentLanguage === 'uk'
      ? getAllCategories()
          .then(res => res.availableCategoriesUa)
          .then(list => {
            setCategory(list);
            formData.category = list[list.length - 1];
          })
          .catch(error => console.error(error))
      : getAllCategories()
          .then(res => res.availableCategoriesEn)
          .then(list => {
            setCategory(list);
            if (formData.category === '') {
              formData.category = list[list.length - 1];
            }
          })
          .catch(error => console.error(error));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentLanguage]);

  return (
    <div className={css.wrapper}>
      <div id="1" className={css.inputWrapper + ' ' + css.inputWrapperBalance}>
        <label htmlFor="balance" className={css.labelBalance}>
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
      <div id="2" className={css.inputWrapper}>
        <label htmlFor="category" className={css.label}>
          {t('cashFlow.category')}
        </label>
        <div className="container">
          <div className={css.dropdown} onClick={handlerToggler}>
            <input
              id="category"
              className={css.textBox}
              type="select"
              value={formData.category}
              name="category"
              onChange={handleChange}
              readOnly
            />
            <div className={css.options}>
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
      <div id="3" className={css.inputWrapper}>
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
      <div id="4" className={css.inputWrapper}>
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
          placeholder={t('cashFlow.placeholderSum')}
        />
      </div>
    </div>
  );
};
