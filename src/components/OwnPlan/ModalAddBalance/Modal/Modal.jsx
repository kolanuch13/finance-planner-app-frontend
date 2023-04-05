import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch } from 'react-redux';
import { balance } from 'redux/auth/auth-operations';
import styles from './Modal.module.css';
import { useTranslation } from 'react-i18next';
import { MdClose } from 'react-icons/md';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ children, onClose, userBalance }) => {
  const { t } = useTranslation();
  const [balanceValue, setBalanceValue] = useState('');
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

  const handleBalanceValue = e => {
    setBalanceValue(e.target.value);
  };

  const handleBackdrop = e => {
    if (e.target === e.currentTarget) {
      if (userBalance !== 0) {
        onClose();
      }
    }
  };

  const handleSubmitModal = e => {
    e.preventDefault();

    dispatch(balance({ balance: Number(balanceValue) }))
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
          className={
            userBalance === 0
              ? styles.btnCloseModalDisabled
              : styles.btnCloseModal
          }
          //  onClick={onClose}
        >
          <MdClose size={'24px'} />
        </button>
        <form className={styles.form} action="" onSubmit={handleSubmitModal}>
          <label className={styles.labelWrapper}>
            <input
              className={styles.input}
              value={balanceValue}
              onChange={handleBalanceValue}
              type="number"
              placeholder="Add balance"
            />

            <div className={styles.btnContainer}>
              <button
                type="submit"
                className={
                  userBalance === 0 && !balanceValue
                    ? styles.btnDisabled
                    : styles.btn
                }
                disabled={userBalance === 0 && !balanceValue}
              >
                {t('personalPlane.addBalance')}
              </button>
              <button
                className={userBalance === 0 ? styles.btnDisabled : styles.btn}
                onClick={onClose}
                disabled={userBalance === 0}
              >
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
