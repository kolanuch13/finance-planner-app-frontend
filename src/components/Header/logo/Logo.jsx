import logoMobile from '../../../images/Logo/logoMobile.png';
import logoTablet from '../../../images/Logo/logoTablet.png';
import logoDesktop from '../../../images/Logo/logoDesktop.png';

import css from './Logo.module.css';

export const Logo = () => {
  return (
    <>
      <img className={css.logoMobile} src={logoMobile} alt="logo" />
      <img className={css.logoTablet} src={logoTablet} alt="logo" />
      <img className={css.logoDesktop} src={logoDesktop} alt="logo" />
    </>
  );
};
