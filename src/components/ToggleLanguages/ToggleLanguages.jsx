import { useTranslation } from 'react-i18next';
import { MdLanguage } from 'react-icons/md';
import '../../i18n';
import css from './ToggleLanguages.module.css';

const ToggleLanguages = () => {
  // eslint-disable-next-line
  const { t, i18n } = useTranslation();

  const switchLang = lang => {
    console.log('change language');
    i18n.changeLanguage(lang);
  };

  return (
    <>
      <button className={css.en} onClick={() => switchLang('en')}>
        En
      </button>
      <MdLanguage className={css.icon} />
      <button className={css.ua} onClick={() => switchLang('ua')}>
        Ua
      </button>
    </>
  );
};

export default ToggleLanguages;
