import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
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
import { useTranslation } from 'react-i18next';

import css from './VerticalBarChart.module.css';

import { enMonthsName, ukMonthName } from 'utils/constants';

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
  const [chartData, setChartData] = useState('');
  let { data } = useSelector(dynamicSelectors.getChartData);
  const {
    i18n: { language },
  } = useTranslation();

  useEffect(() => {
    if (data) {
      const lastYearInfo = data.map(i => ({
        month:
          language === 'en'
            ? enMonthsName[parseInt(i.month) - 1]
            : ukMonthName[parseInt(i.month) - 1],
        expense: i.expense,
        income: i.income,
        acumulated: i.income - i.expense,
      }));
      setChartData(lastYearInfo);
    }
  }, [data, language]);

  return (
    <BarChart
      width={440}
      height={208}
      data={chartData}
      className={css.barStyle}
    >
      <Legend
        className={css.legendStyle}
        margin={{ top: 70, left: 0, right: 10, bottom: 80 }}
        align="left"
        verticalAlign="top"
        iconSize={11}
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
        name={language === 'en' ? 'Acumulated' : 'Накопичено'}
      />
      <Bar
        dataKey="expense"
        fill="#3A6AF5"
        barSize={5}
        legendType="circle"
        radius={[10, 10, 0, 0]}
        name={language === 'en' ? 'Expense' : 'Витрати'}
      />
      <Bar
        dataKey="income"
        fill="#F3F3F3"
        barSize={5}
        legendType="circle"
        radius={[10, 10, 0, 0]}
        name={language === 'en' ? 'Income' : 'Доходи'}
      />
    </BarChart>
  );
};

export default VerticalBarChart;
