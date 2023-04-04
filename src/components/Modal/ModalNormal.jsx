import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import css from './Modal.module.css';

const ModalNormal = ({ closeModal, children }) => {
  useEffect(() => {
    const closeByEsc = ({ code }) => {
      if (code === 'Escape') {
        closeModal();
      }
    };

    window.addEventListener('keydown', closeByEsc);

    return () => {
      window.removeEventListener('keydown', closeByEsc);
    };
  }, [closeModal]);

  const closeByBackdrop = event => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  const modalRoot = document.querySelector('#modal-root');
  return createPortal(
    <div className={css.Overlay} onClick={closeByBackdrop}>
      <div>{children}</div>
    </div>,
    modalRoot
  );
};

export default ModalNormal;
