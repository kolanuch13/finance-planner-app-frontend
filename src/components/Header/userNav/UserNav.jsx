import React, { useState } from 'react';
// import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Modal } from '../../Modal/Modal';
import { ModalLogin } from '../../Modal/ModalLogin';
import { ModalRegister } from '../../Modal/ModalRegister';

import css from './UserNav.module.css';

function Navigation(props) {
  //   const token = useSelector(state => state.auth?.token);
  const [whichModal, setWhichModal] = useState(null);
  const [isOpenModalLogin, setIsOpenModalLogin] = useState(false);
  const [isOpenModalRegister, setIsOpenModalRegister] = useState(false);

  const handleToggleModalLogin = modal => {
    setWhichModal(modal);
    setIsOpenModalLogin(isOpenModal => !isOpenModal);
  };
  const handleToggleModalRegister = modal => {
    setWhichModal(modal);
    setIsOpenModalRegister(isOpenModal => !isOpenModal);
  };

  return (
    <div>
      <nav>
        <div className={css.userNav}>
          {/* <NavLink to="/login"> */}
          <button
            type="button"
            className={css.login}
            onClick={() => handleToggleModalLogin('login')}
          >
            Log in
          </button>
          {/* </NavLink> */}

          {/* <NavLink to="/register"> */}
          <button
            type="button"
            className={css.register}
            onClick={() => handleToggleModalRegister('register')}
          >
            Registration
          </button>
          {/* </NavLink> */}
        </div>
      </nav>
      {whichModal && (
        <Modal onToggleModal={handleToggleModal}>
          {(whichModal === 'login' && <ModalLogin />) ||
            (whichModal === 'register' && <ModalRegister />)}
        </Modal>
      )}
    </div>
  );
}

export default Navigation;
