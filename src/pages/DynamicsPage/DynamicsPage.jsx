import css from './DynamicPage.module.css';
import { Chart, Info, StatisticPerMonth } from '../../components/DynamicsPage';

const DynamicPage = () => {
  return (
    <div className={css.section}>
      <h1>Dynamics of expenses and savings</h1>
      <Chart />
      <StatisticPerMonth />
      <Info />
    </div>
  );
};

export default DynamicPage;
