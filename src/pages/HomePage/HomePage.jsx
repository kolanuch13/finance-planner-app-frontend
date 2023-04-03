import css from '../HomePage/HomePage.module.css';

import {FcGoogle} from 'react-icons/fc'
import { useTranslation } from 'react-i18next';
import '../../i18n';

const HomePage = () => {
  const { t } = useTranslation();
  return (
    <main className={css.main}>
      <h1 className={css.title}>
        <span className={css.mainLogo}>{t('home.highlightedTitle')}</span>
        {t('home.title')}
      </h1>
      <div className={css.sloganContainer}>
        <p className={css.sloganText}>
          {t('home.subtitlePayment')}
          <span className={css.sloganPartText}>
            {' '}
            &#32; {t('home.highlightedSubtitlePayment')}
          </span>
        </p>
      </div>
      <div className={css.sloganContainerSecond}>
        <p className={css.sloganText}>
          <span className={css.sloganPartText}>
            {t('home.highlightedІubtitleApartments')} &#32;
          </span>
          {t('home.іubtitleApartments')}
        </p>
      </div>
      <div className={css.signGoogle}>
        <FcGoogle size={"18px"}/>

        <a
          href="http://localhost:4000/api/auth/google"
          className={css.signText}
        >
          {t('home.googleSignIn')}
        </a>
      </div>
    </main>
  );
};

export default HomePage;
