import svgGoogle from '../../images/GoogleIcon.svg';
import css from '../HomePage/HomePage.module.css';
import imgManDesc from '../../images/ManDesc.png';
import ManDesc from '../../images/ManDesc.png';
import imgManMob from '../../images/ManMob.png';
import EllipseBigMob from '../../images/EllipseBigMob.png';
import EllipseSmallMob from '../../images/EllipseSmallMob.png';
import EllipseBigTablet from '../../images/EllipseBig.png';
import EllipseSmallTablet from '../../images/EllipseSmall.png';
import BigTablet from '../../images/BigTablet.png';
import BigInsideTablet from '../../images/BigInsideDesc.png';
import BigInsideDesc from '../../images/BigInsideDesc.png';
import BigMob from '../../images/BigMob.png';
import BigDesc from '../../images/BigDesc.png';
import BigInsideMob from '../../images/BigInsideMob.png';
import { useTranslation } from 'react-i18next';
import '../../i18n';

export const Home = () => {
  const { t } = useTranslation();
  return (
    <main className={css.main}>
      <h1 className={css.title}>
        <span className={css.mainLogo}>{t('home.highlightedTitle')}</span>
        {t('home.title')}
      </h1>
      <img className={css.manDesc} src={imgManDesc} alt="" />
      <img className={css.manDesctop} src={ManDesc} alt="" />
      <img className={css.manMob} src={imgManMob} alt="" />
      <img className={css.EllipseBigMob} src={EllipseBigMob} alt="" />
      <img className={css.EllipseSmallTablet} src={EllipseSmallTablet} alt="" />
      <img className={css.EllipseBigTablet} src={EllipseBigTablet} alt="" />
      <img className={css.EllipseSmallMob} src={EllipseSmallMob} alt="" />
      <img className={css.BigMob} src={BigMob} alt="" />
      <img className={css.BigInsideMob} src={BigInsideMob} alt="" />
      <img className={css.BigTablet} src={BigTablet} alt="" />
      <img className={css.BigInsideTablet} src={BigInsideTablet} alt="" />
      <img className={css.BigInsideDesc} src={BigInsideDesc} alt="" />
      <img className={css.BigDesc} src={BigDesc} alt="" />
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
        <img src={svgGoogle} alt="" />

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
