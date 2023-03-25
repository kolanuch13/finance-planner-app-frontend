import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import css from './Modal.module.css';

const modalRoot = document.getElementById('modal-root');

export const Modal = ({ children, onToggleModal, whichModal }) => {
  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onToggleModal(false);
    }
  };
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onToggleModal(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onToggleModal, whichModal]);

  return createPortal(
    <div className={css.Overlay} onClick={handleBackdropClick}>
      {children}
    </div>,
    modalRoot
  );
};
