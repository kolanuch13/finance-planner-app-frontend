import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCategories } from 'redux/statistics/statistics-selector';
import statisticsOperations from '../../redux/statistics/statistics-operations';
import modifyCategory from 'helpers/modifyCategory';

const CategoriesStatistic = () => {
  const dispatch = useDispatch();
  const categories = useSelector(selectCategories);

  useEffect(() => {
    dispatch(statisticsOperations.categoryStatistic());
  }, [dispatch]);

  if (categories?.length === 0) return;

  return (
    <>
      <ul>
        {categories?.map(({ _id: id, totalSum, percent }) => (
          <li key={id}>
            <p>{modifyCategory(id)}</p>
            <p>-{totalSum} UAH</p>
            <p>{percent}%</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default CategoriesStatistic;
