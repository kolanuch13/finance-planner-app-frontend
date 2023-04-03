import { useState } from 'react';
import { useSelector } from 'react-redux';
import { balance } from 'redux/auth/auth-selectors'
import Modal from '../ModalAddBalance/Modal/Modal';
import css from './PeriodPlan.module.css';


const PeriodPlan = ({data}) => {
  const userBalance = useSelector(balance);
  const [isModalShown, setIsModalShown] = useState(false);
  const openModalAddBalance = () => {
    console.log("click");
    userBalance === 0 && setIsModalShown(prevState => !prevState);
  };

  return (

      <div className={css.boxForm}>
        <p className={css.text}>You will have an apartment in:</p>
        <div className={css.form}>
          <label className={css.LabelForm}>
            <span className={css.textLabebel}>Number of years</span>
            <input 
              className={css.input} 
              type="numbers" 
              placeholder="0 years"
              value={data.years} 
              readOnly
            />

          </label>
          <label className={css.LabelFormMonths}>
            <span className={css.textLabebel}>Number of months</span>
            <input 
              className={css.input} 
              type="numbers" 
              placeholder="0 months"
              value={data.months}
              readOnly
            />
          </label>
          <div className={css.btnContainer}>
            <button
              className={`${css.buttonAddBalance} ${!userBalance && css.active}`}
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
