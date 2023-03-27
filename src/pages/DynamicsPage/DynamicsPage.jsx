import css from './DynamicPage.module.css';
import HorizontalBarChart from '../../components/DynamicsPage/HorizontalBarChart';
import VerticalBarChart from '../../components/DynamicsPage/VerticalBarChart';
import Info from '../../components/DynamicsPage/Info';
import AddMore from '../../components/DynamicsPage/AddMore';
import StatisticPerMonth from '../../components/DynamicsPage/StatisticPerMonth';

const DynamicsPage = () => {
  console.log(window.innerWidth);
  return (
    <div className={css.section}>
      <div className={css.container}>
        {window.innerWidth < 1280 ? (
          <>
            <div className={css.statisticBlock}>
              <div>
                <h1 className={css.title}>Dynamics of expenses and savings</h1>
                {window.innerWidth > 767 ? (
                  <VerticalBarChart />
                ) : (
                  <HorizontalBarChart />
                )}
                <StatisticPerMonth />
              </div>
              <Info />
            </div>
            <AddMore />
          </>
        ) : (
          <div className={css.dynamic}>
            <div className={css.statisticBlock}>
              <h1 className={css.title}>Dynamics of expenses and savings</h1>
              {window.innerWidth > 767 ? (
                <VerticalBarChart />
              ) : (
                <HorizontalBarChart />
              )}
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
