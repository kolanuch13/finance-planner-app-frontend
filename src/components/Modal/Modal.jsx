import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createPortal } from 'react-dom';
import css from './Modal.module.css';

const modalRoot = document.getElementById('modal-root');

export const Modal = ({ children }) => {
  const navigate = useNavigate();
  const [isOpenModal, setIsOpenModal] = useState(true);
  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      setIsOpenModal(false);
      navigate('/');
    }
  };
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        setIsOpenModal(false);
        navigate('/');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [navigate]);

  const handleModalClose = () => {
    setIsOpenModal(false);
    navigate('/');
  };
  // here is lock overflow when open modal
  // useEffect(() => {
  //   document.body.style.overflow = 'hidden';
  //   return () => (document.body.style.overflow = 'unset');
  // }, []);

  return (
    isOpenModal &&
    createPortal(
      <div
        className={css.Overlay}
        onClick={handleBackdropClick || handleModalClose}
      >
        {React.cloneElement(children, { handleModalClose })}
      </div>,
      modalRoot
    )
  );
};
