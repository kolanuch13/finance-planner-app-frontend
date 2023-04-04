import deepEqual from 'deep-equal'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectorPlanData } from 'redux/plan/plan-selectors';
import { addPersonalPlanAPI, currentPersonalPlanAPI } from 'redux/plan/plan-operations';
import { selectorAccumPeriod } from 'redux/plan/plan-selectors';
import { Container } from 'components/Container/Container';
import PeriodPlan from 'components/OwnPlan/PeriodPlan/PeriodPlan';
import PlanInput from 'components/OwnPlan/PlanInput/PlanInput';
import styles from './OwnPlanPage.module.css';

const OwnPlanPage = () => {
  const dispatch = useDispatch();
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
  const periodPlan = {
    years: accumPeriod?.years || "",
    months: accumPeriod?.months || "",
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (newPlanData === null) {
      dispatch(addPersonalPlanAPI({
        ...planData,
        ...periodPlan
      }))
    } else if (!deepEqual(newPlanData, planData)) {
      dispatch(currentPersonalPlanAPI({
        ...planData,
        ...periodPlan
      }))
    }
  } 

  return (
    <Container>
      <form className={styles.form} onSubmit={handleSubmit}>
        <PlanInput data={planData} setData={setPlanData}/>
        <PeriodPlan data={periodPlan}/>
      </form>
    </Container>
  );
};

export default OwnPlanPage;