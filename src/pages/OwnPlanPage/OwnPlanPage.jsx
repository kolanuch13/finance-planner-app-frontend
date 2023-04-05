import deepEqual from 'deep-equal';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectorPlanData } from 'redux/plan/plan-selectors';
import {
  addPersonalPlanAPI,
  currentPersonalPlanAPI
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
      Notify.warning('All fields is required.');
    }
    // If user is new => add new data to DB and show the succes message
    if (newPlanData === null) {
      dispatch(
        addPersonalPlanAPI({
          ...planData,
          ...periodPlan,
        })
      )
      .then(()=> {
        Notify.success('Your personal plan was saved!');
      })
      .catch(err => {
        Notify.failure(err.message);
      })
    // If user is regular => refresh the data and send to DB and show the succes message
    } else if (!deepEqual(newPlanData, planData)) {
      dispatch(
        currentPersonalPlanAPI({
          ...planData,
          ...periodPlan,
        })
      ).then(()=> {
        Notify.success('Your personal plan was refreshed!');
      }).then(res => {
        navigate('/cashflow');
      }).catch(err => {
        Notify.failure(err.message);
      })
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
