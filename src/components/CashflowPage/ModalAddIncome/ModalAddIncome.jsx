import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import css from './ModalAddIncome.module.css';

const modalRoot = document.querySelector('#modal-root');

const ModalAddIncome = ({ closeModal, setFormData, handleSubmitAdd, formData }) => {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.key === 'Escape') closeModal();
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [closeModal]);

  const handleBackdrop = e => {
    if (e.target === e.currentTarget) closeModal();
  };

  return createPortal(
    <div className={css.backdrop} onClick={handleBackdrop}>
      <div className={css.containerModal}>
        <button
          type="button"
          className={css.btnCloseModal}
          onClick={closeModal}
        >
          X
        </button>
        <form className={css.form} onSubmit={handleSubmitAdd}>
          <label className={css.labelWrapper}>
            <input
              className={css.input}
              type="text"
              value={formData.sum}
              onChange={e => setFormData({categoryType: "income", sum: e.target.value})}
              placeholder="Enter income"
            />

            <div className={css.btnContainer}>
              <button className={css.btn} type="submit" >Add</button>
              <button className={css.btn} onClick={closeModal}>
                Cancel
              </button>
            </div>
          </label>
        </form>
      </div>
    </div>,
    modalRoot
  );
};

export default ModalAddIncome;