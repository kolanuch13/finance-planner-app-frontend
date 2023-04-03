import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPersonalPlanPreAPI } from 'redux/plan/plan-operations';
import { selectorPlanData } from 'redux/plan/plan-selectors';
import InputsList from '../InputList/InputsList';
import styles from './PlanInput.module.css';
import { useTranslation } from 'react-i18next';

const PlanInput = () => {
  const {t} = useTranslation();
  const dataInput = [
    {
      name: 'salary',
      title: t('personalPlane.firstInput'),
      placeholder: t('personalPlane.placeholderFirstInput'),
    },
    {
      name: 'passiveIncome',
      title: t('personalPlane.secondInput'),
      placeholder: t('personalPlane.placeholderSecondInput'),
    },
    {
      name: 'savings',
      title: t('personalPlane.thirdInput'),
      placeholder: t('personalPlane.placeholderThirdInput'),
    },
    {
      name: 'cost',
      title: t('personalPlane.fourthInput'),
      placeholder: t('personalPlane.placeholderFourthInput'),
    },
    {
      name: 'footage',
      title: t('personalPlane.fifthInput'),
      placeholder: t('personalPlane.placeholderFifthInput'),
    },
    {
      name: 'procent',
      title: t('personalPlane.sixthInput'),
      placeholder: t('personalPlane.placeholderSixthInput'),
      descr: t('personalPlane.additionalInfoSixthInput'),
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

  console.log(newPlanData);
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
    console.log(curPlanData);
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
