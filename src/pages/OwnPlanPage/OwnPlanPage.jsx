import deepEqual from 'deep-equal';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectorPlanData } from 'redux/plan/plan-selectors';
import {
  addPersonalPlanAPI,
  currentPersonalPlanAPI,
  getPersonalPlan,
} from 'redux/plan/plan-operations';
import { selectorAccumPeriod } from 'redux/plan/plan-selectors';
import { Container } from 'components/Container/Container';
import PeriodPlan from 'components/OwnPlan/PeriodPlan/PeriodPlan';
import PlanInput from 'components/OwnPlan/PlanInput/PlanInput';
import styles from './OwnPlanPage.module.css';
import { useNavigate } from 'react-router-dom';
import { Notify } from 'notiflix';

const OwnPlanPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const newPlanData = useSelector(selectorPlanData);
  const accumPeriod = useSelector(selectorAccumPeriod);
  const [planData, setPlanData] = useState({
    salary: newPlanData?.salary || '',
    passiveIncome: newPlanData?.passiveIncome || '',
    savings: newPlanData?.savings || '',
    cost: newPlanData?.cost || '',
    footage: newPlanData?.footage || '',
    procent: newPlanData?.procent || '',
  });

  let periodPlan = { ...accumPeriod };

  const handleSubmit = e => {
    e.preventDefault();
    periodPlan = {
      years: accumPeriod?.years,
      months: accumPeriod?.months,
    };
    if (
      !planData.salary ||
      !planData.passiveIncome ||
      !planData.savings ||
      !planData.cost ||
      !planData.footage ||
      !planData.procent
    ) {
      Notify.warning('All fields is required');
    }
    console.log(periodPlan);
    if (newPlanData === null) {
      dispatch(
        addPersonalPlanAPI({
          ...planData,
          ...periodPlan,
        })
      );
    } else if (!deepEqual(newPlanData, planData)) {
      dispatch(
        currentPersonalPlanAPI({
          ...planData,
          ...periodPlan,
        })
      ).then(res => {
        navigate('/cashflow');
      });
    }
  };

  return (
    <Container>
      <form className={styles.form} onSubmit={handleSubmit}>
        <PlanInput data={planData} setData={setPlanData} />
        <PeriodPlan data={periodPlan} />
      </form>
    </Container>
  );
};

export default OwnPlanPage;
