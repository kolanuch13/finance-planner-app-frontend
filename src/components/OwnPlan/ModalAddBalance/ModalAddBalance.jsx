import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { balance } from "redux/auth/auth-selectors";
import {balanceOperation} from "redux/auth/auth-operations";
import Modal from './Modal/Modal';

const ModalAddBalance = ({ closeModal }) => {
  const dispatch = useDispatch();
  const [updateBalance, setUpdateBalance] = useState(0);
  const newBalance = useSelector(balance);
  const isLoading = useSelector((state) => state.isLoading);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(balanceOperation(Number(updateBalance)));
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
            value={updateBalance}
            onChange={(e) => setUpdateBalance(e.target.value)}
          />
        </form>
      </Modal>
    )
  );
};

export default ModalAddBalance;
