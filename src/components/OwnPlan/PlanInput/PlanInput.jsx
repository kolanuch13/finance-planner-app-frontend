import { useDispatch, useSelector } from 'react-redux';
import { addPersonalPlanPreAPI } from 'redux/plan/plan-operations';
import { selectorPlanData } from 'redux/plan/plan-selectors';
import InputsList from '../InputList/InputsList';
import styles from './PlanInput.module.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { balance } from 'redux/auth/auth-selectors'

const PlanInput = ({data, setData}) => {
  const dataInput = [
    {
      name: 'salary',
      title: 'RFP of both spouses',
      placeholder: 'Enter data',
    },
    {
      name: 'passiveIncome',
      title: 'Passive income, months',
      placeholder: 'Enter data',
    },
    {
      name: 'savings',
      title: 'Savings',
      placeholder: 'Enter data',
    },
    {
      name: 'cost',
      title: 'Specify the cost of your future apartment',
      placeholder: 'Enter data',
    },
    {
      name: 'footage',
      title: 'Specify the number of sq.m. of your future apartment',
      placeholder: 'Enter data',
    },
    {
      name: 'procent',
      title: 'Accumulation',
      placeholder: 'Enter data',
      descr:
        'Specify the percentage that you would like to accumulate per month from the total amount of income and you will see when you reach the goal',
    },
  ];
  const userBalance = useSelector(balance)
  const dispatch = useDispatch();
  const curPlanData = useSelector(selectorPlanData);

  const onChange = event => {
    const { name, value } = event.target;
    userBalance === 0 ? Notify.warning('At first enter the balance at the bottom of the page⬇') : 
    setData(prev => ({
      ...prev,
      [name]: value === '' ? value : Number(value),
    }));
  };

  const onBlur = () => {
    if (Object.values(data).filter(element => element === '').length)
      return;
    if (JSON.stringify(curPlanData) === JSON.stringify(data)) return;
    dispatch(addPersonalPlanPreAPI(data));
  };

  return (

      <div className={styles.container}>
        <ul className={styles.list}>
          {dataInput.map((element, index) => (
            <InputsList
              key={index}
              num={index + 1}
              {...element}
              value={data[element.name]}
              onChange={onChange}
              disabled={element.name === 'savings' && curPlanData?.id}
              onBlur={onBlur}
              type="numbers"
            />
          ))}
        </ul>
        <div className={styles.bg}></div>
      </div>

  );
};

export default PlanInput;
