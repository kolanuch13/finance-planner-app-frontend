import React, { useState } from 'react';
import css from './Modals.module.css';
import { BsEyeSlashFill } from 'react-icons/bs';
import { BsEye } from 'react-icons/bs';

export const ModalLogin = () => {
  const [typeInput, setTypeInput] = useState(true);
  const [isLookPwd, setIsLookPwd] = useState(false);

  const handleToggleEye = () => {
    setIsLookPwd(prev => !prev);
    setTypeInput(prev => !prev);
  };

  return (
    <div className={css.box}>
      <p className={css.title}>Log In</p>
      <form className={css.form}>
        <label className={css.labelWrapper}>
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
            className={css.input}
            type={typeInput ? 'password' : 'text'}
            placeholder="Enter your password"
          />
          <span className={css.eye} onClick={handleToggleEye}>
            {isLookPwd ? <BsEye /> : <BsEyeSlashFill />}
          </span>
        </label>
        <button type="submit" className={css.btn}>
          Log In
        </button>
      </form>
    </div>
  );
};
