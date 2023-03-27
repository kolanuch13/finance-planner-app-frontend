import { RxHamburgerMenu } from 'react-icons/rx';
import { MdClose } from 'react-icons/md';

import css from './BurgerBtn.module.css';

export const BurgerBtn = ({ onClick, isMenuOpen }) => {
  return (
    <button className={css.burgerMenuBtn} onClick={onClick} type="button">
      {isMenuOpen ? (
        <MdClose className={css.GrClose} />
      ) : (
        <RxHamburgerMenu className={css.RxHamburgerMenu} />
      )}
    </button>
  );
};
