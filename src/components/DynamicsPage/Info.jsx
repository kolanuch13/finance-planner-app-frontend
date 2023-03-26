import css from './Info.module.css';
import LinearProgress from '@mui/joy/LinearProgress';

import { sprite } from '../../images/DynamicPage';

const Info = () => {
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
            <LinearProgress determinate size="md" value={28} />
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
