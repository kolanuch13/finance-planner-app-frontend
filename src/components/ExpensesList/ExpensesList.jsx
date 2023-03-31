import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ExpensesListItem from '../ExpensesListItem/ExpensesListItem';
import statisticsOperations from '../../redux/statistics/statistics-operations';
import { selectTransactions } from 'redux/statistics/statistics-selector';
import getAllCategories from 'helpers/categories';

const ExpensesList = () => {
  const dispatch = useDispatch();
  const transaction = useSelector(selectTransactions);
  const [open, setOpen] = useState(false);
  const [category, setCategory] = useState('Other');
  const [sum, setSum] = useState(0);
  const [comment, setComment] = useState('');
  const [categoryType, setCategoryType] = useState();
  const [allCategory, setAllCategory] = useState([]);
  const [idTransaction, setIdTransaction] = useState('');
  const currentLang = localStorage.getItem('i18nextLng');

  useEffect(() => {
    const period = JSON.parse(localStorage.getItem('selectedPeriod'));
    currentLang === 'ru-UA'
      ? getAllCategories().then(res =>
          setAllCategory(res.availableCategoriesEn)
        )
      : getAllCategories().then(res =>
          setAllCategory(res.availableCategoriesUa)
        );
    dispatch(statisticsOperations.expenseStatistic(period));
  }, [currentLang, dispatch]);

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'category':
        setCategory(value);
        break;
      case 'sum':
        setSum(value);
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
    setCategory(() => item.category);
    setComment(() => item.comment);
    setIdTransaction(() => item._id);
    setCategoryType(() => item.categoryType);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const data = { category, sum, comment, categoryType };
    dispatch(statisticsOperations.updateTransaction({ idTransaction, data }));
    setCategory('');
    setSum('');
    setComment('');
    setOpen(prev => !prev);
  };

  const removeTransaction = id => {
    dispatch(statisticsOperations.removeExpense(id));
  };

  if (transaction?.length === 0) return;
  console.log(transaction);

  return (
    <>
      <ul>
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
      {open && (
        <form onSubmit={handleSubmit}>
          <label>
            Per category
            <select name="category" value={category} onChange={handleChange}>
              {allCategory.length > 0 &&
                allCategory.map((item, id) => (
                  <option key={id} value={item}>
                    {item}
                  </option>
                ))}
            </select>
          </label>
          <label>
            Expense comment
            <input
              type="text"
              name="comment"
              value={comment}
              onChange={handleChange}
            />
          </label>
          <label>
            Sum
            <input
              type="number"
              name="sum"
              value={sum}
              onChange={handleChange}
            />
          </label>
          <button type="submit">Edit</button>
        </form>
      )}
    </>
  );
};

export default ExpensesList;
