import { useTranslation } from 'react-i18next';
import css from './ToggleLanguages.module.css';

const ToggleLanguages = () => {
  const { i18n } = useTranslation();
  const switchLang = lang => {
    i18n.changeLanguage(lang);
  };

  return (
    <>
      <button className={css.text} onClick={() => switchLang('en')}>
        En
      </button>
      <button className={css.text} onClick={() => switchLang('uk')}>
        Ua
      </button>
    </>
  );
};

export default ToggleLanguages;
