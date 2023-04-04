import { useState, useEffect } from 'react';
import { getAllCategory } from 'redux/statistics/statistics-operations';

const ChangeTransaction = ({ isOpen }) => {
  const [category, setCategory] = useState('Other');
  const [sum, setSum] = useState(0);
  const [comment, setComment] = useState('');
  const [allCategory, setAllCategory] = useState([]);

  useEffect(() => {
    getAllCategory().then(setAllCategory);
  }, []);

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

  const handleSubmit = e => {
    e.preventDefault();

    handleSubmit({ category, sum, comment });
    setCategory('');
    setSum('');
    setComment('');
  };

  return (
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
        <input type="number" name="sum" value={sum} onChange={handleChange} />
      </label>
      <button type="button">Edit</button>
    </form>
  );
};

export default ChangeTransaction;
