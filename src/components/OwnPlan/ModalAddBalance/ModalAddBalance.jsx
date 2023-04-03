import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { balance } from "redux/auth/auth-operations";
import Modal from './Modal/Modal';

const ModalAddBalance = ({ closeModal }) => {
  const dispatch = useDispatch();
  const [updateBalance, setUpdateBalance] = useState(0);
  const isLoading = useSelector((state) => state.isLoading);

  const handleSubmitModal = (e) => {
    e.preventDefault();
    dispatch(balance(Number(updateBalance)));
    closeModal();
  };

  return (
    !isLoading && (
      <Modal closeModal={closeModal}>
        <form onSubmit={handleSubmitModal}>
          <p style={{ color: "#fff", fontSize: "30px" }}>Add balance:</p>
          <input
            type="text"
            value={updateBalance}
            onChange={(e) => setUpdateBalance(e.target.value)}
          />
        </form>
      </Modal>
    )
  );
};

export default ModalAddBalance;
