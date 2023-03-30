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
  // ResponsiveContainer,
} from 'recharts';

import css from './VerticalBarChart.module.css';

const renderCustomizedLabelX = props => {
  const { x, y, payload } = props;
  return (
    <text x={x} y={y} dy={23} fill="#F3F3F3" textAnchor="middle">
      {payload.value}
    </text>
  );
};

const renderCustomizedLabelY = props => {
  const { x, y, payload } = props;
  return (
    <text x={x} y={y} dy={23} fill="#F3F3F3" textAnchor="end">
      {payload.value}
    </text>
  );
};

const VerticalBarChart = () => {
  let chartData = useSelector(dynamicSelectors.getChartData);
  // chartData[0] = chartData[0].toUpperCase();
  // const result = chartData.charAt(0).toUpperCase() + chartData.slice(1);
  // console.log(result);

  return (
    // <ResponsiveContainer width={500} height="50%">
    <BarChart
      width={440}
      height={208}
      data={chartData.lastYearInfo}
      className={css.barStyle}
    >
      <Legend
        // className={css.legendStyle}
        margin={{ top: 70, left: 0, right: 10, bottom: 80 }}
        align="left"
        verticalAlign="top"
        iconSize={11}
        // layout="vertical"
        // verticalAlign="middle"
        // chartWidth={15}
      />
      <XAxis
        dataKey="month"
        type="category"
        tick={renderCustomizedLabelX}
        axisLine={false}
        tickLine={false}
      />
      <YAxis
        axisLine={false}
        tickLine={false}
        tickSize={3}
        tickCount={6}
        minTickGap={10}
        tick={renderCustomizedLabelY}
      />
      <CartesianGrid
        stroke="#454851"
        strokeDasharray="5 5 5"
        verticalCoordinatesGenerator="none"
      />
      <Tooltip />
      <Bar
        dataKey="acumulated"
        fill="#6359E9"
        barSize={5}
        legendType="circle"
        radius={[10, 10, 0, 0]}
      />
      <Bar
        dataKey="expense"
        fill="#3A6AF5"
        barSize={5}
        legendType="circle"
        radius={[10, 10, 0, 0]}
      />
      <Bar
        dataKey="income"
        fill="#F3F3F3"
        barSize={5}
        legendType="circle"
        radius={[10, 10, 0, 0]}
      />
    </BarChart>
    // </ResponsiveContainer>
  );
};

export default VerticalBarChart;
