import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import styles from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ children, onClose }) => {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleBackdrop = e => {
    if (e.target === e.currentTarget) onClose();
  };

  return createPortal(
    <div className={styles.backdrop} onClick={handleBackdrop}>
      <div className={styles.containerModal}>
        <button
          type="button"
          className={styles.btnCloseModal}
          onClick={onClose}
        >
          X
        </button>
        <form className={styles.form} action="">
          <label className={styles.labelWrapper}>
            <input
              className={styles.input}
              type="text"
              placeholder="Add balance"
            />

            <div className={styles.btnContainer}>
              <button className={styles.btn}>Add balance</button>
              <button className={styles.btn} onClick={onClose}>
                Cancel
              </button>
            </div>
          </label>
        </form>
      </div>
      {children}
    </div>,
    modalRoot
  );
};

export default Modal;
