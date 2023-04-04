import css from './ExpensesLimits.module.css';
import { useTranslation } from 'react-i18next';

export const ExpensesLimits = ({ dailyLimit, monthlyLimit, openModalAddIncome}) => {
  const { t } = useTranslation();

  return (
    <div className={css.expensesLimitsWrapper}>
      <div className={css.dailyLimitWrapper}>
        <input
          className={css.input}
          type="text"
          value={dailyLimit}
          name="dailyLimit"
          id="dailyLimit"
          readOnly
        />
        <label htmlFor="dailyLimit" className={css.label}>
          {t('cashFlow.dayLimit')}
        </label>
      </div>
      <div className={css.monthlyLimitWrapper}>
        <input
          className={css.input}
          type="text"
          value={monthlyLimit}
          name="monthlyLimit"
          id="monthlyLimit"
          readOnly
        />
        <label htmlFor="monthlyLimit" className={css.label}>
          {t('cashFlow.monthlyLimit')}
        </label>
      </div>
      <div className={css.btnsWrapper}>
        <button type="submit" className={css.btnReady}>
          {t('cashFlow.buttonReady')}
        </button>
        <button type="button" className={css.btnAdd} onClick={openModalAddIncome}>
          {t('cashFlow.addIncome')}
        </button>
      </div>
    </div>
  );
};
