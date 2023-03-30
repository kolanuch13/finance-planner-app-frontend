import moment from 'moment';
import { ReactComponent as Pensil } from '../../images/pensil.svg';
import { ReactComponent as Busket } from '../../images/busket.svg';
import modifyCategory from 'helpers/modifyCategory';
import css from './ExpensesListItem.module.css';

const ExpensesListItem = ({
  id,
  sum,
  date,
  category,
  comment,
  updateTransaction,
  removeTransaction,
}) => {
  return (
    <li className={css.transactionItem} key={id}>
      <div className={css.transactionThumb}>
        <div className={css.commentWrapper}>
          <p className={css.transactionDate}>
            {moment(date).format('DD.MM.YYYY')}
          </p>
          <p className={css.transactionComment}>{comment}</p>
        </div>

        <div>
          <p className={css.transactionSum}>{sum} UAH</p>
        </div>
      </div>
      <p className={css.transactionCategory}>{modifyCategory(category)}</p>
      <div className={css.buttonThumb}>
        <button
          className={css.buttonItem}
          type="button"
          onClick={() => updateTransaction(id)}
        >
          {<Pensil />}
        </button>
        <button
          className={css.buttonItem}
          type="button"
          onClick={() => removeTransaction(id)}
        >
          {<Busket />}
        </button>
      </div>
    </li>
  );
};

export default ExpensesListItem;
