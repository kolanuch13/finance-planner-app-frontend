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

import css from './HorizontalBarChart.module.css';

const renderCustomizedLabelX = props => {
  const { x, y, payload } = props;
  return (
    <text x={x} y={y - 3} dy={0} fill="#F3F3F3" textAnchor="middle">
      {payload.value}
    </text>
  );
};

const renderCustomizedLabelY = props => {
  const { x, y, payload } = props;
  return (
    <text x={x - 10} y={y} dy={3} fill="#F3F3F3" textAnchor="end">
      {payload.value}
    </text>
  );
};

const HorizontalBarChart = () => {
  const chartData = useSelector(dynamicSelectors.getChartData);
  return (
    <BarChart
      width={230}
      height={436}
      data={chartData.lastYearInfo}
      layout="vertical"
      className={css.barStyle}
    >
      <Legend
        layout="vertical"
        align="center"
        verticalAlign="top"
        iconSize={11}
        margin={{ top: 70, left: 0, right: 10, bottom: 80 }}
      />
      <XAxis
        type="number"
        tick={renderCustomizedLabelX}
        axisLine={false}
        tickLine={false}
        tickSize={3}
        tickCount={6}
        orientation="top"
      />
      <YAxis
        dataKey="month"
        type="category"
        tick={renderCustomizedLabelY}
        axisLine={false}
        tickLine={false}
      />
      <CartesianGrid
        stroke="#454851"
        strokeDasharray="5 5 5"
        horizontalCoordinatesGenerator="none"
      />
      <Tooltip />
      <Bar
        dataKey="acumulated"
        fill="#6359E9"
        barSize={5}
        legendType="circle"
        radius={[0, 10, 10, 0]}
      />
      <Bar
        dataKey="expense"
        fill="#3A6AF5"
        barSize={5}
        legendType="circle"
        radius={[0, 10, 10, 0]}
      />
      <Bar
        dataKey="income"
        fill="#F3F3F3"
        barSize={5}
        legendType="circle"
        radius={[0, 10, 10, 0]}
      />
    </BarChart>
  );
};

export default HorizontalBarChart;
