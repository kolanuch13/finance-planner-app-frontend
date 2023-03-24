import React from 'react';
import InputsList from '../InputList/InputsList';
import styles from './PlanInput.module.css';
import { Container } from 'components/Container/Container';

const PlanInputList = () => {
  const dataInput = [
    {
      name: 'salary',
      title: '1. RFP of both spouses',
      placeholder: 'Enter data',
    },
    {
      name: 'cost',
      title: '4. Specify the cost of your future apartment',
      placeholder: 'Enter data',
    },
    {
      name: 'passiveIncome',
      title: '2. Passive income, months',
      placeholder: 'Enter data',
    },
    {
      name: 'footage',
      title: '5. Specify the number of sq.m. of your future apartment',
      placeholder: 'Enter data',
    },
    {
      name: 'savings',
      title: '3. Savings',
      placeholder: 'Enter data',
    },
    {
      name: 'procent',
      title: '6. Accumulation',
      placeholder: 'Enter data',
      descr:
        'Specify the percentage that you would like to accumulate per month from the total amount of income and you will see when you reach the goal',
    },
  ];

  return (
    <Container>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <ul className={styles.list}>
            {dataInput.map((element, index) => (
              <InputsList key={index} {...element} />
            ))}
          </ul>
        </div>
        <div className={styles.bg}></div>
      </div>
    </Container>
  );
};

export default PlanInputList;
