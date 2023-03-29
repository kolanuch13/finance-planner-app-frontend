import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { balanceSelector } from "redux/auth/auth-selectors";
import { balanceOperation } from "redux/auth/auth-operations";
import Modal from './Modal/Modal';

const ModalAddBalance = ({ closeModal }) => {
  const dispatch = useDispatch();
  const [balance, setBalance] = useState(0);
  const newBalance = useSelector(balanceSelector);
  const isLoading = useSelector((state) => state.isLoading);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(balanceOperation(Number(balance)));
  };

  useEffect(() => {
    newBalance && closeModal();
  }, [newBalance, closeModal]);

  return (
    !isLoading && (
      <Modal closeModal={closeModal}>
        <form onSubmit={handleSubmit}>
          <p style={{ color: "#fff", fontSize: "30px" }}>Add balance:</p>
          <input
            type="text"
            value={balance}
            onChange={(e) => setBalance(e.target.value)}
          />
        </form>
      </Modal>
    )
  );
};

export default ModalAddBalance;
