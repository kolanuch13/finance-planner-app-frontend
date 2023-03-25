import { useTranslation } from 'react-i18next';
import { MdLanguage } from 'react-icons/md';
import '../../i18n';

const ToggleLanguages = () => {
  // eslint-disable-next-line
  const { t, i18n } = useTranslation();

  const switchLang = lang => {
    console.log('change language');
    i18n.changeLanguage(lang);
  };

  return (
    <>
      <button onClick={() => switchLang('en')}>En</button>
      <MdLanguage />
      <button onClick={() => switchLang('ua')}>Ua</button>
    </>
  );
};

export default ToggleLanguages;
