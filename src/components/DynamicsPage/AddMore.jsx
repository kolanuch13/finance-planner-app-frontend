import css from './AddMore.module.css';
import {
  dynamicImageMobile,
  dynamicImageMobile2x,
  dynamicImageTablet,
  dynamicImageTablet2x,
  dynamicImageDesktop,
  dynamicImageDesktop2x,
} from '../../images/DynamicPage';

const AddMore = () => {
  return (
    <div className={css.addMoreBox}>
      <p className={css.addMoreTitle}>
        To add more <span className={css.addMoreMeter}>1 sq.m</span> for
        planning, it remains to accumulate
        <span className={css.addMoreSum}>14 000 &#8372;</span>
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
