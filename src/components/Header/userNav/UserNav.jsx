import React, { useState } from 'react';
// import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Modal } from '../../Modal/Modal';
import { ModalLogin } from '../../Modal/ModalLogin';
import { ModalRegister } from '../../Modal/ModalRegister';

import css from './UserNav.module.css';

function Navigation(props) {
  //   const token = useSelector(state => state.auth?.token);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleToggleModal = () => {
    setIsOpenModal(isOpenModal => !isOpenModal);
  };

  return (
    <div>
      <nav>
        <div className={css.userNav}>
          <NavLink to="/login">
            <button
              type="button"
              className={css.login}
              onClick={handleToggleModal}
            >
              Log in
            </button>
          </NavLink>

          <NavLink to="/register">
            <button
              type="button"
              className={css.register}
              onClick={handleToggleModal}
            >
              Registration
            </button>
          </NavLink>
        </div>
      </nav>
      {isOpenModal && (
        <Modal onToggleModal={handleToggleModal}>
          <ModalLogin />
        </Modal>
      )}
    </div>
  );
}

export default Navigation;
