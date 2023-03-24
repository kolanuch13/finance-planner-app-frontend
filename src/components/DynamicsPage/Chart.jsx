import React, { PureComponent } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const data = [
  {
    month: 'Page A',
    Accumulated: 4000,
    Expenses: 2400,
    Income: 2400,
  },
  {
    month: 'Page B',
    Accumulated: 3000,
    Expenses: 1398,
    Income: 2210,
  },
  {
    month: 'Page A',
    Accumulated: 4000,
    Expenses: 2400,
    Income: 2400,
  },
  {
    month: 'Page B',
    Accumulated: 3000,
    Expenses: 1398,
    Income: 2210,
  },
  {
    month: 'Page A',
    Accumulated: 4000,
    Expenses: 2400,
    Income: 2400,
  },
  {
    month: 'Page B',
    Accumulated: 3000,
    Expenses: 1398,
    Income: 2210,
  },
  {
    month: 'Page A',
    Accumulated: 4000,
    Expenses: 2400,
    Income: 2400,
  },
  {
    month: 'Page B',
    Accumulated: 3000,
    Expenses: 1398,
    Income: 2210,
  },
];

export default class Chart extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/simple-bar-chart-tpz8r';

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <Bar dataKey="Accumulated" fill="#6359E9" />
          <Bar dataKey="Expenses" fill="#3A6AF5" />
          <Bar dataKey="Income" fill="#F3F3F3" />
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
