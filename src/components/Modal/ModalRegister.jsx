import React, { useState } from 'react';
import css from './Modals.module.css';
import { BsEyeSlashFill } from 'react-icons/bs';
import { BsEye } from 'react-icons/bs';

export const ModalRegister = () => {
  const [typeInput, setTypeInput] = useState(true);
  const [isLookPwd, setIsLookPwd] = useState(false);

  const handleToggleEye = () => {
    setIsLookPwd(prev => !prev);
    setTypeInput(prev => !prev);
  };

  return (
    <div className={css.box}>
      <p className={css.title}>Registration</p>
      <form className={css.form}>
        <label>
          <span className={css.label}>Name:</span>
          <input
            className={css.input}
            type="text"
            placeholder="Enter your name"
          />
        </label>
        <label>
          <span className={css.label}>Email:</span>
          <input
            className={css.input}
            type="text"
            placeholder="Enter your email"
          />
        </label>
        <label className={css.labelWrapper}>
          <span className={css.label}>Password:</span>
          <input
            placeholder="Create password"
            className={css.input}
            type={typeInput ? 'password' : 'text'}
          />
          <span className={css.eye} onClick={handleToggleEye}>
            {isLookPwd ? <BsEye /> : <BsEyeSlashFill />}
          </span>
        </label>
        <button className={css.btn}>Sign Up</button>
      </form>
    </div>
  );
};
