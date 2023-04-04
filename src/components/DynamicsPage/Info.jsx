import css from './Info.module.css';
import LinearProgress from '@mui/joy/LinearProgress';
import { useTranslation } from 'react-i18next';
import { useGetYearWord, useGetMonthWord } from 'helpers/getCaseWords';

import { sprite } from '../../images/DynamicPage';
import { useMediaQuery } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { dynamicSelectors } from '../../redux/dynamics';
import { dynamicOperation } from '../../redux/dynamics';

const Info = () => {
  const { t } = useTranslation();
  const mobile = useMediaQuery('(max-width: 767px)');
  const tablet = useMediaQuery('(max-width:1279px) and (min-width: 768px) ');
  const desktop = useMediaQuery('(min-width: 1280px)');

  const {
    acumulatedAsPercentage,
    acumulatedMoney,
    acumulatedSqMeters,
    timeIsLeft,
    footage,
  } = useSelector(dynamicSelectors.getChartData);

  const { imageURL } = useSelector(dynamicSelectors.getImageURl);

  const dispatch = useDispatch();

  const handleSubmitImage = e => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('flatImage', file);
    dispatch(dynamicOperation.updateImageThunk(formData));
  };

  return (
    <>
      <div className={css.infoBlock}>
        <div className={css.statistis}>
          <p className={css.timeIsLeft}>
            {t('dynamics.after')} {timeIsLeft?.years}{' '}
            {useGetYearWord(timeIsLeft?.years)} {timeIsLeft?.months}{' '}
            {useGetMonthWord(timeIsLeft?.months)}
          </p>
          <div className={css.statistisBox}>
            <div className={css.statisticWrapper}>
              <p className={css.statTitle}>
                {t('dynamics.accumulatedItem')} &#x20B4;
              </p>
              <p className={css.statSum}>{acumulatedAsPercentage}&#37;</p>
            </div>
            <div className={css.statisticWrapper}>
              <p className={css.statTitle}>{t('dynamics.accumulated')}, UAH:</p>
              <p className={css.statSum}>{acumulatedMoney} &#8372;</p>
            </div>
            <div className={css.statisticWrapper}>
              <p className={css.statTitle}>{t('dynamics.andThis')}</p>
              <p className={css.statSum}>
                {acumulatedSqMeters} {t('dynamics.sqM')}
              </p>
            </div>
          </div>
          <div className={css.progressBarBox}>
            <p className={css.progressBarTitle}>
              {acumulatedSqMeters} {t('dynamics.outOf')} {footage}{' '}
              {t('dynamics.sqMetersAccumulated')}
            </p>
            {mobile && (
              <LinearProgress
                determinate
                size="md"
                value={acumulatedAsPercentage}
                style={{ width: '343px' }}
              />
            )}
            {tablet && (
              <LinearProgress
                determinate
                size="md"
                value={acumulatedAsPercentage}
                style={{ width: '224px' }}
              />
            )}
            {desktop && (
              <LinearProgress
                determinate
                size="md"
                value={acumulatedAsPercentage}
                style={{ width: '270px' }}
              />
            )}
          </div>
        </div>
        {imageURL ? (
          <div className={css.imgBlock}>
            <img
              src={`${imageURL}?${Math.random()}`}
              alt="customers flat"
              className={css.image}
            />
            <label htmlFor="changeFlatImage" className={css.changeImageLabel}>
              {t('dynamics.changeImage')}
            </label>
            <input
              onChange={handleSubmitImage}
              type="file"
              name="changeFlatImage"
              className={css.flatImage}
              id="changeFlatImage"
            />
          </div>
        ) : (
          <>
            <label htmlFor="flatImage" className={css.imageLabel}>
              <svg className={css.uploadImageIcon}>
                <use href={`${sprite}#icon-upload_image`}></use>
              </svg>
            </label>
            <input
              onChange={handleSubmitImage}
              type="file"
              name="flatImage"
              className={css.flatImage}
              id="flatImage"
            />
          </>
        )}
      </div>
    </>
  );
};

export default Info;
