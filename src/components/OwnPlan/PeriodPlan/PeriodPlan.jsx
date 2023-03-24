import style from './PeriodPlan.module.css';

const PeriodPlanExecution = () => {
  return (
    <div title="You will have an apartment in:">
      <button type="button" className={style.btnAddBalance}>
        Add balance
      </button>
    </div>
  );
};

export default PeriodPlanExecution;
