import { useState } from 'react';
import { Container } from '../../Container/Container';
import Modal from '../ModalAddBalance/Modal/Modal';
import css from './PeriodPlan.module.css';
import { useSelector } from 'react-redux';
import { selectorPreMonth, selectorPreYear } from 'redux/plan/plan-selectors';



const PeriodPlan = () => {
  const preYear = useSelector(selectorPreYear)
  const preMonth = useSelector(selectorPreMonth)



  const [isModalShown, setIsModalShown] = useState(false);

  const openModalAddBalance = () => {
    setIsModalShown(prevState => !prevState);
  };

  return (

      <div className={css.boxForm}>
        <p className={css.text}>You will have an apartment in:</p>
        <div className={css.form}>
          <label className={css.LabelForm}>
            <span className={css.textLabebel}>Number of years</span>
            <input className={css.input} type="text" placeholder="0 years" value={preYear} />

          </label>
          <label className={css.LabelFormMonths}>
            <span className={css.textLabebel}>Number of months</span>
            <input className={css.input} type="text" placeholder="0 months" value={preMonth}/>
          </label>
          <div className={css.btnContainer}>
            <button
              className={css.buttonAddBalance}
              type="button"
              onClick={openModalAddBalance}
            >
              Add balance
            </button>

            {isModalShown && (
              <Modal
                onClick={openModalAddBalance}
                onClose={openModalAddBalance}
              />
            )}

            <button className={css.button} type="submit">
              Fits
            </button>
          </div>
        </div>
      </div>

  );
};

export default PeriodPlan;

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
