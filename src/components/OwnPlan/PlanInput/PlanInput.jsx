import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPersonalPlanPreAPI } from 'redux/plan/plan-operations';
import { selectorPlanData } from 'redux/plan/plan-selectors';
import InputsList from '../InputList/InputsList';
import styles from './PlanInput.module.css';

const PlanInput = () => {
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

  const initialPlanDataState = {
    salary: '',
    passiveIncome: '',
    savings: '',
    cost: '',
    footage: '',
    procent: '',
  };

  const dispatch = useDispatch();
  const curPlanData = useSelector(selectorPlanData);
  const [newPlanData, setNewPlanData] = useState(initialPlanDataState);
  // const [newPlanData, setNewPlanData] = useState(
  //   curPlanData ? curPlanData : initialPlanDataState
  // );

  const onChange = event => {
    const { name, value } = event.target;
    setNewPlanData(prev => ({
      ...prev,
      [name]: value === '' ? value : Number(value),
    }));
  };

  const onBlur = () => {
    if (Object.values(newPlanData).filter(element => element === '').length)
      return;
    if (JSON.stringify(curPlanData) === JSON.stringify(newPlanData)) return;
    dispatch(addPersonalPlanPreAPI(newPlanData));
  };

  useEffect(() => {
    if (curPlanData) {
      setNewPlanData(curPlanData);
    }
  }, [curPlanData]);

  return (
    <div className={styles.container}>

        <ul className={styles.list}>
          {dataInput.map((element, index) => (
            <InputsList
              key={index}
              num={index + 1}
              {...element}
              value={newPlanData[element.name]}
              onChange={onChange}
              disabled={element.name === 'savings' && curPlanData?.id}
              onBlur={onBlur}
            />
          ))}
        </ul>

      <div className={styles.bg}></div>
    </div>
  );
};

export default PlanInput;
