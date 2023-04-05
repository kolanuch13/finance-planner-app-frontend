import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import css from './ModalAddIncome.module.css';
import { MdClose } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import cashflowOperations from 'redux/cashflowPage/cashflowPage-operations';
import { useNavigate } from 'react-router-dom';

const modalRoot = document.querySelector('#modal-root');

const ModalAddIncome = ({
  closeModal,
  setFormData,
  handleSubmitAdd,
  formData,
}) => {
  const [income, setIncome] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
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

  //   const handleChange = e =>
  //     setFormData({ categoryType: 'income', sum: e.target.value });

  const handleSubmitIncome = e => {
    e.preventDefault();
    dispatch(
      cashflowOperations.addTransaction({
        categoryType: 'income',
        sum: income,
      })
    )
      .then(res => {
        closeModal();
        navigate('/dynamics');
      })
      .catch(console.log);
  };

  const onChangeIncome = e => {
    setIncome(e.target.value);
  };

  return createPortal(
    <div className={css.backdrop} onClick={handleBackdrop}>
      <div className={css.containerModal}>
        <button
          type="button"
          className={css.btnCloseModal}
          onClick={closeModal}
        >
          <MdClose size={'24px'} />
        </button>
        <form className={css.form} onSubmit={handleSubmitIncome} id="income">
          <label htmlFor="sum" className={css.labelWrapper}>
            <input
              className={css.input}
              id="sum"
              type="number"
              onChange={onChangeIncome}
              value={income}
              name="sum"
              required
              placeholder="Enter income"
            />

            <div className={css.btnContainer}>
              <button className={css.btn} type="submit">
                Add
              </button>
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
