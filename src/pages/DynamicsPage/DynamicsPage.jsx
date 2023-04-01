import css from './DynamicPage.module.css';
import HorizontalBarChart from '../../components/DynamicsPage/HorizontalBarChart';
import VerticalBarChart from '../../components/DynamicsPage/VerticalBarChart';
import Info from '../../components/DynamicsPage/Info';
import AddMore from '../../components/DynamicsPage/AddMore';
import StatisticPerMonth from '../../components/DynamicsPage/StatisticPerMonth';
import { useDispatch } from 'react-redux';
import { dynamicOperation } from '../../redux/dynamics';
import { useEffect } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTranslation } from 'react-i18next';
import '../../i18n';

const DynamicsPage = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const tablet = useMediaQuery('(min-width:768px)');
  const desktop = useMediaQuery('(min-width: 1280px)');

  useEffect(() => {
    dispatch(dynamicOperation.yearInfoThunk());
    dispatch(dynamicOperation.getImageThunk());
  });
  return (
    <div className={css.section}>
      <div className={css.container}>
        {!desktop ? (
          <>
            <div className={css.statisticBlock}>
              <div>
                <h1 className={css.title}>{t('dynamics.title')}</h1>
                {tablet ? <VerticalBarChart /> : <HorizontalBarChart />}
                <StatisticPerMonth />
              </div>
              <Info />
            </div>
            <AddMore />
          </>
        ) : (
          <div className={css.dynamic}>
            <div className={css.statisticBlock}>
              <h1 className={css.title}>{t('dynamics.title')}</h1>
              {tablet ? <VerticalBarChart /> : <HorizontalBarChart />}
              <StatisticPerMonth />
            </div>
            <div>
              <Info />
              <AddMore />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DynamicsPage;
