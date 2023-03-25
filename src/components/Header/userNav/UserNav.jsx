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
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleToggleModal = modal => {
    switch (modal) {
      case 'login':
        setWhichModal('login');
        setIsOpenModal(true);
        break;
      case 'register':
        setWhichModal('register');
        setIsOpenModal(true);
        break;

      default:
        break;
    }
  };
  return (
    <div>
      <nav>
        <div className={css.userNav}>
          {/* <NavLink to="/login"> */}
          <button
            type="button"
            className={css.login}
            onClick={() => handleToggleModal('login')}
          >
            Log in
          </button>
          {/* </NavLink> */}

          {/* <NavLink to="/register"> */}
          <button
            type="button"
            className={css.register}
            onClick={() => handleToggleModal('register')}
          >
            Registration
          </button>
          {/* </NavLink> */}
        </div>
      </nav>
      {isOpenModal && (
        <Modal whichModal={whichModal} onToggleModal={setIsOpenModal}>
          {(whichModal === 'login' && <ModalLogin />) ||
            (whichModal === 'register' && <ModalRegister />)}
        </Modal>
      )}
    </div>
  );
}

export default Navigation;
