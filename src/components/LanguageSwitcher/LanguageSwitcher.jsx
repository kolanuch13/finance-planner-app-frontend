import css from './LanguageSwitcher.module.css';
import { useTranslation } from 'react-i18next';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const lang = i18n.language;

  const switchLang = e => {
    const newLang = e.target.value === "en" ? "uk" : "en"
    i18n.changeLanguage(newLang);
  };

  const style = currentLang => lang === currentLang 
    ? {"color": "#3a6af5",
     "backgroundColor": "#fff"} : {"color": "#fff"}

  return (
    <label className={css.languageSwitcher}>
      <input
        type="checkbox"
        value={lang}
        onChange={switchLang}
      />
      <span className={`${css.Slider} ${css.Round}`}></span>
      <span className={css.selectUa} style={style("en")}>
        EN
      </span>
      <span  className={css.selectEn} style={style("uk")}>
        UA
      </span>
    </label>
  );
}
