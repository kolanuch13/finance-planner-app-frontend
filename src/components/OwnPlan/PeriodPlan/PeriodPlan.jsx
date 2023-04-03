import { useState } from 'react';
import { useSelector } from 'react-redux';
import { balance } from 'redux/auth/auth-selectors'
import Modal from '../ModalAddBalance/Modal/Modal';
import css from './PeriodPlan.module.css';
import { useTranslation } from 'react-i18next';

const PeriodPlan = ({data}) => {
  const {t} = useTranslation();
  const userBalance = useSelector(balance);
  const [isModalShown, setIsModalShown] = useState(false);
  const openModalAddBalance = () => {
    console.log("click");
    userBalance === 0 && setIsModalShown(prevState => !prevState);
  };

  return (
    <div className={css.boxForm}>
      <p className={css.text}>{t('personalPlane.informTitle')}</p>
      <div className={css.form}>
        <label className={css.LabelForm}>
          <span className={css.textLabebel}>
            {t('personalPlane.informYear')}
          </span>
          <input
            className={css.input}
            type="text"
            placeholder={`0 ` + t('personalPlane.placeholderInformYear')}
            value={data.years} 
            readOnly
          />
        </label>
        <label className={css.LabelFormMonths}>
          <span className={css.textLabebel}>
            {t('personalPlane.informMonth')}
          </span>
          <input
            className={css.input}
            type="number"
            placeholder={`0 ` + t('personalPlane.placeholderInformMonth')}
            value={data.months}
          />
        </label>
        <div className={css.btnContainer}>
          <button
            className={css.buttonAddBalance}
            type="button"
            onClick={openModalAddBalance}
          >
            {t('personalPlane.addBalance')}
          </button>

          {isModalShown && (
            <Modal
              onClick={openModalAddBalance}
              onClose={openModalAddBalance}
            />
          )}

          <button className={css.button} type="submit">
            {t('personalPlane.buttonFits')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PeriodPlan;
