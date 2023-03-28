import css from './Info.module.css';
import LinearProgress from '@mui/joy/LinearProgress';

import { sprite } from '../../images/DynamicPage';
import { useMediaQuery } from '@mui/material';
import { useSelector } from 'react-redux';
import { dynamicSelectors } from '../../redux/dynamics';

const Info = () => {
  const mobile = useMediaQuery('(max-width: 767px)');
  const tablet = useMediaQuery('(max-width:1279px) and (min-width: 768px) ');
  const desktop = useMediaQuery('(min-width: 1280px)');
  const info = useSelector(dynamicSelectors.getChartData);
  console.log(info);
  return (
    <>
      <div className={css.infoBlock}>
        <div className={css.statistis}>
          <p className={css.timeIsLeft}>After 4 years 1 month</p>
          <div className={css.statistisBox}>
            <div className={css.statisticWrapper}>
              <p className={css.statTitle}>Accumulated, &#37;:</p>
              <p className={css.statSum}>28&#37;</p>
            </div>
            <div className={css.statisticWrapper}>
              <p className={css.statTitle}>Accumulated, UAH:</p>
              <p className={css.statSum}>60 000 &#8372;</p>
            </div>
            <div className={css.statisticWrapper}>
              <p className={css.statTitle}>And this:</p>
              <p className={css.statSum}>22 кв. м</p>
            </div>
          </div>
          <div className={css.progressBarBox}>
            <p className={css.progressBarTitle}>
              22 out of 60 sq.m accumulated
            </p>
            {mobile && (
              <LinearProgress
                determinate
                size="md"
                value={28}
                style={{ width: '343px' }}
              />
            )}
            {tablet && (
              <LinearProgress
                determinate
                size="md"
                value={28}
                style={{ width: '224px' }}
              />
            )}
            {desktop && (
              <LinearProgress
                determinate
                size="md"
                value={28}
                style={{ width: '270px' }}
              />
            )}
          </div>
        </div>
        <div>
          <label htmlFor="flatImage" className={css.imageLabel}>
            <svg className={css.uploadImageIcon}>
              <use href={`${sprite}#icon-upload_image`}></use>
            </svg>
          </label>
          <input
            type="file"
            name="flatImage"
            className={css.flatImage}
            id="flatImage"
          />
        </div>
      </div>
    </>
  );
};

export default Info;
