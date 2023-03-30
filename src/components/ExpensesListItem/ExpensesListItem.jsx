import { ReactComponent as Pensil } from '../../images/pensil.svg';
import { ReactComponent as Busket } from '../../images/busket.svg';
import moment from 'moment';

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
    <li key={id}>
      <div>
        <p>{moment(date).format('DD.MM.YYYY')}</p>
      </div>
      <div>
        <p>{comment}</p>
        <p>{sum} UAH</p>
      </div>
      <p>{category}</p>
      <button type="button" onClick={() => updateTransaction(id)}>
        {<Pensil />}
      </button>
      <button type="button" onClick={() => removeTransaction(id)}>
        {<Busket />}
      </button>
    </li>
  );
};

export default ExpensesListItem;
