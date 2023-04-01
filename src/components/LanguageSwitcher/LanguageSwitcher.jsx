import css from './LanguageSwitcher.module.css';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import '../../i18n';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [isChecked, setIsChecked] = useState(
    localStorage.getItem('isChecked') === 'true' || i18n.language === 'en'
  );

  const switchLang = lang => {
    i18n.changeLanguage(lang);
  };

  useEffect(() => {
    localStorage.setItem('isChecked', isChecked);
    if (isChecked) {
      switchLang('en');
    } else {
      switchLang('ua');
    }
  }, [isChecked]);

  useEffect(() => {
    if (i18n.language === 'en') {
      setIsChecked(true);
    } else {
      setIsChecked(false);
    }
  }, [i18n.language]);

  return (
    <label className={css.languageSwitcher}>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={e => setIsChecked(e.target.checked)}
      />
      <span className={`${css.Slider} ${css.Round}`}></span>
      <span onClick={() => switchLang('en')} className={css.selectUa}>
        EN
      </span>
      <span onClick={() => switchLang('ua')} className={css.selectEn}>
        UA
      </span>
    </label>
  );
}
