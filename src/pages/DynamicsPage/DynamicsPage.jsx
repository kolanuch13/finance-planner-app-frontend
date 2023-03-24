import css from './DynamicPage.module.css';
import Chart from '../../components/DynamicsPage';
import Info from '../../components/DynamicsPage';
import StatisticPerMonth from '../../components/DynamicsPage';

const DynamicsPage = () => {
  return (
    <div className={css.section}>
      <h1>Dynamics of expenses and savings</h1>
      <Chart />
      <StatisticPerMonth />
      <Info />
    </div>
  );
};

export default DynamicsPage;
