import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import css from './ModalAddIncome.module.css';
import {MdClose} from 'react-icons/md'

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

  const handleChange = e => setFormData({categoryType: "income", sum: e.target.value});

  return createPortal(
    <div className={css.backdrop} onClick={handleBackdrop}>
      <div className={css.containerModal}>
        <button
          type="button"
          className={css.btnCloseModal}
          onClick={closeModal}
        >
          <MdClose size={"24px"}/>
        </button>
        <form className={css.form} onSubmit={handleSubmitAdd} id="income">
          <label htmlFor="sum" className={css.labelWrapper}>
            <input
              className={css.input}
              id="sum"
              type="number"
              onChange={handleChange}
              value={formData.sum}
              name="sum"
              required
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