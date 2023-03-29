// import { useSelector } from 'react-redux';
// import { selectorAccumPeriod } from 'redux/plan/plan-selectors';
// import styles from './PeriodPlan.module.css';
// import ResultForm from './ResultForm/ResultForm';

// const PeriodPlanExecution = ({ openModalAddBalance }) => {
//   const resultFormOptions = {
//     fields: [
//       {
//         title: 'Number of years',
//         name: 'year',
//       },
//       {
//         title: 'Number of month',
//         name: 'month',
//       },
//     ],
//     btnSubmit: 'Fits',
//   };
//   // const accumulationPeriod = useSelector(selectorAccumPeriod);
//   const accumulationPeriod = useSelector();

//   return (
//     <ResultForm
//       title="You will have an apartment in:"
//       options={resultFormOptions}
//       data={accumulationPeriod}
//     >
//       <button
//         type="button"
//         className={styles.btnAddBalance}
//         onClick={openModalAddBalance}
//       >
//         Add balance
//       </button>
//     </ResultForm>
//   );
// };

// export default PeriodPlanExecution;

import { Container } from '../../Container/Container';
import css from './PeriodPlan.module.css';

const PeriodPlan = ({ openModalAddBalance }) => {
  return (
    <Container>
      <div className={css.boxForm}>
        <p className={css.text}>You will have an apartment in:</p>
        <form className={css.form}>
          <label className={css.LabelForm}>
            <span className={css.textLabebel}>Number of years</span>
            <input className={css.input} type="text" placeholder="0 years" />
          </label>
          <label className={css.LabelFormMonths}>
            <span className={css.textLabebel}>Number of months</span>
            <input className={css.input} type="text" placeholder="0 months" />
          </label>
          <div className={css.btnContainer}>
            <button
              className={css.buttonAddBalance}
              type="button"
              // className={styles.btnAddBalance}
              // onClick={openModalAddBalance}
            >
              Add balance
            </button>
            <button className={css.button} type="submit">
              Fits
            </button>
          </div>
        </form>
      </div>
    </Container>
  );
};

export default PeriodPlan;
