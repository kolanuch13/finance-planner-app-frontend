import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import styles from './Modal.module.css';
import { useTranslation } from 'react-i18next';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ children, onClose }) => {
  const { t } = useTranslation();
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
              placeholder={t('personalPlane.addBalance')}
            />

            <div className={styles.btnContainer}>
              <button className={styles.btn}>
                {t('personalPlane.addBalance')}
              </button>
              <button className={styles.btn} onClick={onClose}>
              {t('personalPlane.buttonCancel')}
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
