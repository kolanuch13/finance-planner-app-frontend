import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { selectCategories } from 'redux/statistics/statistics-selector';
import statisticsOperations from '../../redux/statistics/statistics-operations';
import modifyCategory from 'helpers/modifyCategory';
import '../../i18n';
import css from './CategoriesStatistic.module.css';

const CategoriesStatistic = () => {
  const dispatch = useDispatch();
  const categories = useSelector(selectCategories);
  const { t } = useTranslation();

  useEffect(() => {
    const period = JSON.parse(localStorage.getItem('selectedPeriod'));
    dispatch(statisticsOperations.categoryStatistic(period));
  }, [dispatch]);

  const sortedCategories = categories => {
    if (categories !== null) {
      const sortedArray = [...categories].sort(
        (a, b) => b.totalSum - a.totalSum
      );
      return sortedArray;
    }
  };

  return (
    <>
      {categories?.length === 0 && (
        <div className={css.noCategoriesWrapper}>
          <p className={css.noCategoriesText}>{t('expenses.noStatistic')}</p>
        </div>
      )}
      <ul className={css.categoriesList}>
        {sortedCategories(categories)?.map(({ _id: id, totalSum, percent }) => (
          <li className={css.categoriesItem} key={id}>
            <div className={css.categoriesThumb}>
              <p className={css.categoriesType}>{modifyCategory(id)}</p>
              <p className={css.categoriesSum}>-{totalSum} UAH</p>
            </div>
            <p className={css.categoriesPercent}>{parseInt(percent)}%</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default CategoriesStatistic;
