import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch } from 'react-redux';
import { balance } from 'redux/auth/auth-operations';
import styles from './Modal.module.css';
import { useTranslation } from 'react-i18next';
import { MdClose } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ children, onClose }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [updateBalance, setUpdateBalance] = useState(0);
  const dispatch = useDispatch();
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

  const handleSubmitModal = e => {
    e.preventDefault();

    dispatch(balance({ balance: Number(updateBalance) }))
      .then(res => {
        onClose();
      })
      .catch(console.log);
  };

  return createPortal(
    <div className={styles.backdrop} onClick={handleBackdrop}>
      <div className={styles.containerModal}>
        <p className={styles.info}>Enter balance to continue !!!</p>
        <button
          type="button"
          className={styles.btnCloseModal}
          onClick={onClose}
        >
          <MdClose size={'24px'} />
        </button>
        <form className={styles.form} action="" onSubmit={handleSubmitModal}>
          <label className={styles.labelWrapper}>
            <input
              className={styles.input}
              value={updateBalance}
              onChange={e => setUpdateBalance(e.target.value)}
              type="number"
              placeholder="Add balance"
            />

            <div className={styles.btnContainer}>
              <button type="submit" className={styles.btn}>
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
