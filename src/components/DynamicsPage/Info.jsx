import css from './Info.module.css';
import LinearProgress from '@mui/joy/LinearProgress';

import { sprite } from '../../images/DynamicPage';
import { useMediaQuery } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { dynamicSelectors } from '../../redux/dynamics';

import { dynamicOperation } from '../../redux/dynamics';

const Info = () => {
  const mobile = useMediaQuery('(max-width: 767px)');
  const tablet = useMediaQuery('(max-width:1279px) and (min-width: 768px) ');
  const desktop = useMediaQuery('(min-width: 1280px)');

  const {
    acumulatedAsPercentage,
    acumulatedMoney,
    acumulatedSqMeters,
    timeIsLeft,
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
            After {timeIsLeft?.years} years
            {timeIsLeft?.months} month
          </p>
          <div className={css.statistisBox}>
            <div className={css.statisticWrapper}>
              <p className={css.statTitle}>Accumulated, &#37;:</p>
              <p className={css.statSum}>{acumulatedAsPercentage}&#37;</p>
            </div>
            <div className={css.statisticWrapper}>
              <p className={css.statTitle}>Accumulated, UAH:</p>
              <p className={css.statSum}>{acumulatedMoney} &#8372;</p>
            </div>
            <div className={css.statisticWrapper}>
              <p className={css.statTitle}>And this:</p>
              <p className={css.statSum}>{acumulatedSqMeters} кв. м</p>
            </div>
          </div>
          <div className={css.progressBarBox}>
            <p className={css.progressBarTitle}>
              {acumulatedSqMeters} out of 60 sq.m accumulated
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
              Change image
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
