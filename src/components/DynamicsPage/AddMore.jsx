import css from './AddMore.module.css';
import {
  dynamicImageMobile,
  dynamicImageMobile2x,
  dynamicImageTablet,
  dynamicImageTablet2x,
  dynamicImageDesktop,
  dynamicImageDesktop2x,
} from '../../images/DynamicPage';
import { useSelector } from 'react-redux';
import { dynamicSelectors } from '../../redux/dynamics';
import { useTranslation } from 'react-i18next';
import '../../i18n';

const AddMore = () => {
  const { t } = useTranslation();
  const { leftAcumulatedMoneyToMeter } = useSelector(
    dynamicSelectors.getChartData
  );
  return (
    <div className={css.addMoreBox}>
      <p className={css.addMoreTitle}>
        {t('dynamics.missingInfoFirst')}{' '}
        <span className={css.addMoreMeter}>{t('dynamics.1sqM')}</span>{' '}
        {t('dynamics.missingInfoSecond')}
        <span className={css.addMoreSum}>
          {leftAcumulatedMoneyToMeter} &#8372;
        </span>
      </p>
      <picture>
        <source
          srcSet={`${dynamicImageDesktop} 1x, ${dynamicImageDesktop2x} 2x`}
          media="(min-width: 1280px)"
        />
        <source
          srcSet={`${dynamicImageTablet} 1x, ${dynamicImageTablet2x} 2x`}
          media="(min-width: 768px)"
        />
        <source
          srcSet={`${dynamicImageMobile} 1x, ${dynamicImageMobile2x} 2x`}
          media="(max-width: 767px)"
        />
        <img
          src={`${dynamicImageDesktop} 1x`}
          alt="Dynamic statistic"
          className={css.dynamicImage}
        />
      </picture>
    </div>
  );
};

export default AddMore;
