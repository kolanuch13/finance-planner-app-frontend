import { RxHamburgerMenu } from 'react-icons/rx';
import { GrClose } from 'react-icons/gr';

import css from './BurgerBtn.module.css';

export const BurgerBtn = ({ onClick, isMenuOpen }) => {
  return (
    <button className={css.burgerMenuBtn} onClick={onClick} type="button">
      {isMenuOpen ? (
        <GrClose className={css.GrClose} />
      ) : (
        <RxHamburgerMenu className={css.RxHamburgerMenu} />
      )}
    </button>
  );
};
