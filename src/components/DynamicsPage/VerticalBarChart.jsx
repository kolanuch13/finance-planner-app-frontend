import { useSelector } from 'react-redux';
import { dynamicSelectors } from '../../redux/dynamics';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

const styles = {
  tooltip: {
    backgroundColor: '#191D28',
    border: '1px solid #ccc',
    padding: '10px',
    fontSize: '14px',
    boxShadow: '2px 2px 3px rgba(0,0,0,0.3)',
  },
  tooltipLabel: {
    fontWeight: 'bold',
    marginBottom: '5px',
  },
  barChart: {
    fontSize: '12px',
    lineHeight: '1.16',
    fontWeight: '400',
    color: '#F3F3F3',
    marginBottom: '32px',
  },
};

const VerticalBarChart = () => {
  const chartData = useSelector(dynamicSelectors.getChartData);
  console.log(chartData.lastYearInfo);

  return (
    <BarChart
      width={440}
      height={208}
      data={chartData.lastYearInfo}
      style={styles.barChart}
    >
      <Legend align="left" verticalAlign="top" />
      <XAxis dataKey="month" type="category" />
      <YAxis />
      <CartesianGrid strokeDasharray="3 3 3" />
      <Tooltip contentStyle={styles.tooltip} labelStyle={styles.tooltipLabel} />

      <Bar dataKey="acumulated" fill="#6359E9" legendType="circle" />
      <Bar dataKey="expense" fill="#3A6AF5" legendType="circle" />
      <Bar dataKey="income" fill="#F3F3F3" legendType="circle" />
    </BarChart>
  );
};

export default VerticalBarChart;
