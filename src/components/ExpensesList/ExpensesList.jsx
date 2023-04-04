import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
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
import ExpensesListItem from '../ExpensesListItem/ExpensesListItem';
import Pagination from 'components/Pagination/Pagination';
import statisticsOperations from '../../redux/statistics/statistics-operations';
import {
  selectTransactions,
  selectTotalTransactions,
} from 'redux/statistics/statistics-selector';
import ModalNormal from '../Modal/ModalNormal';
import getAllCategories from 'helpers/categories';
import { ReactComponent as CloseModal } from '../../images/close-modal.svg';
import css from './ExpensesList.module.css';

const ExpensesList = () => {
  const dispatch = useDispatch();
  const transaction = useSelector(selectTransactions);
  const totalTransactions = useSelector(selectTotalTransactions);
  const [open, setOpen] = useState(false);
  const [categoryItem, setCategoryItem] = useState('');
  const [sum, setSum] = useState(0);
  const [comment, setComment] = useState('');
  const [categoryType, setCategoryType] = useState();
  const [allCategory, setAllCategory] = useState([]);
  const [idTransaction, setIdTransaction] = useState('');
  const currentLang = localStorage.getItem('i18nextLng');
  const [page, setPage] = useState(localStorage.getItem('page') ?? 1);
  const itemsPerPage = 6;
  const totalPage = Math.ceil(totalTransactions / itemsPerPage);
  const { t } = useTranslation();
  const style = { color: '#3A6AF5', size: '15px', display: 'block' };
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
  useEffect(() => {
    const period = JSON.parse(localStorage.getItem('selectedPeriod'));

    const data = { ...period, page, limit: itemsPerPage };
    currentLang === 'en'
      ? getAllCategories().then(res =>
          setAllCategory(res.availableCategoriesEn)
        )
      : getAllCategories().then(res =>
          setAllCategory(res.availableCategoriesUa)
        );
    dispatch(statisticsOperations.expenseStatistic(data));
  }, [currentLang, dispatch, page]);

  const actualPage = selectedPage => {
    setPage(Number(selectedPage));
  };

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'category':
        setCategoryItem(value.toLowerCase());
        break;
      case 'sum':
        setSum(Number(value));
        break;
      case 'comment':
        setComment(value);
        break;

      default:
        throw new Error();
    }
  };

  const updateTransaction = id => {
    setOpen(prev => !prev);

    const item = transaction.find(item => id === item._id);
    setSum(() => Number(item.sum));
    setCategoryItem(
      () => item.category[0].toUpperCase() + item.category.slice(1)
    );
    setComment(() => item.comment);
    setIdTransaction(() => item._id);
    setCategoryType(() => item.categoryType.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();
    const data = {
      category: categoryItem.toLowerCase(),
      sum,
      comment,
      categoryType,
    };
    dispatch(statisticsOperations.updateTransaction({ idTransaction, data }));
    setSum('');
    setComment('');
    setOpen(prev => !prev);
  };

  const removeTransaction = id => {
    dispatch(statisticsOperations.removeExpense(id));
  };

  const closeModal = () => {
    setOpen(prev => !prev);
  };

  const handlerToggler = e => {
    e.currentTarget.classList.toggle(css.dropdownActive);
  };

  const handlerCategory = e => {
    setCategoryItem(e.target.textContent);
  };

  return (
    <>
      {transaction?.length === 0 && (
        <div className={css.noTransactionWrapper}>
          <p className={css.noTransactionText}>{t('expenses.noTransaction')}</p>
        </div>
      )}

      <ul className={css.transactionList}>
        {transaction &&
          transaction.map(({ _id: id, sum, comment, category, date }) => (
            <ExpensesListItem
              key={id}
              sum={sum}
              comment={comment}
              category={category}
              date={date}
              removeTransaction={() => removeTransaction(id)}
              updateTransaction={() => updateTransaction(id)}
            />
          ))}
      </ul>

      {totalTransactions > 6 && <Pagination actualPage={actualPage} totalPage={totalPage} page={page} />}

      {open && (
        <ModalNormal closeModal={closeModal}>
          <form className={css.formWrapper} onSubmit={handleSubmit}>
            <label htmlFor="category" className={css.formLabel}>
              {t('expenses.perCategory')}

              <div className="container">
                <div className={css.dropdown} onClick={handlerToggler}>
                  <input
                    className={css.formInput}
                    type="text"
                    value={categoryItem}
                    name="category"
                    onChange={handleChange}
                    readOnly
                  />

                  <div className={css.options}>
                    {allCategory.map((item, idx) => (
                      <div key={idx} onClick={handlerCategory}>
                        {icons[idx]}
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </label>

            <label className={css.formLabel}>
              {t('expenses.expenseComment')}
              <input
                className={css.formInput}
                type="text"
                name="comment"
                maxLength="80"
                value={comment}
                onChange={handleChange}
              />
            </label>

            <label className={css.formLabel}>
              {t('expenses.sum')}
              <input
                className={css.formInput}
                type="text"
                name="sum"
                value={sum}
                onChange={handleChange}
              />
            </label>

            <div>
              <button className={css.buttonEdit} type="submit">
                {t('expenses.buttonEdit')}
              </button>
            </div>
            <button
              className={css.buttonCloseModal}
              type="button"
              onClick={closeModal}
            >
              <CloseModal />
            </button>
          </form>
        </ModalNormal>
      )}
    </>
  );
};

export default ExpensesList;
