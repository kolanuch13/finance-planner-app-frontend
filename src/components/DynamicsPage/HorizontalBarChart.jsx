import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

const data = [
  { name: 'Jan', Acamulated: 4000, Expenses: 2400, Income: 2400 },
  { name: 'Mar', Acamulated: 2000, Expenses: 9800, Income: 2290 },
  { name: 'Apr', Acamulated: 2780, Expenses: 3908, Income: 2000 },
  { name: 'May', Acamulated: 1890, Expenses: 4800, Income: 2181 },
  { name: 'Jun', Acamulated: 2390, Expenses: 3800, Income: 2500 },
  { name: 'Jul', Acamulated: 3490, Expenses: 4300, Income: 2100 },
  { name: 'Aug', Acamulated: 3490, Expenses: 4300, Income: 2100 },
  { name: 'Sep', Acamulated: 3490, Expenses: 4300, Income: 2100 },
  { name: 'Oct', Acamulated: 3490, Expenses: 4300, Income: 2100 },
  { name: 'Nov', Acamulated: 3490, Expenses: 4300, Income: 2100 },
  { name: 'Dec', Acamulated: 3490, Expenses: 4300, Income: 2100 },
  { name: 'Feb', Acamulated: 3000, Expenses: 1398, Income: 2210 },
];
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
    marginBottom: '50px',
  },
};

const HorizontalBarChart = () => {
  return (
    <BarChart
      width={222}
      height={436}
      data={data}
      layout="vertical"
      style={styles.barChart}
    >
      <Legend layout="vertical" align="center" verticalAlign="top" />
      <XAxis type="number" />
      <YAxis dataKey="name" type="category" />
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip contentStyle={styles.tooltip} labelStyle={styles.tooltipLabel} />

      <Bar dataKey="Acamulated" fill="#6359E9" legendType="circle" />
      <Bar dataKey="Expenses" fill="#3A6AF5" legendType="circle" />
      <Bar dataKey="Income" fill="#F3F3F3" legendType="circle" />
    </BarChart>
  );
};

export default HorizontalBarChart;
