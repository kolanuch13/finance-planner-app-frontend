import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import css from './Modals.module.css';
import { BsEyeSlashFill } from 'react-icons/bs';
import { BsEye } from 'react-icons/bs';
import authOperations from 'redux/auth/auth-operations';

export const ModalLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const [typeInput, setTypeInput] = useState(true);
  const [isLookPwd, setIsLookPwd] = useState(false);

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'password':
        return setPassword(value);
      case 'email':
        return setEmail(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const credentials = { email, password };
    dispatch(authOperations.login(credentials))
      .unwrap()
      .then(response => {
        console.log(response);
      })
      .catch(error => console.error(error));
    console.log(credentials);
    setEmail('');
    setPassword('');
  };

  const handleToggleEye = () => {
    setIsLookPwd(prev => !prev);
    setTypeInput(prev => !prev);
  };

  return (
    <div className={css.box}>
      <p className={css.title}>Log In</p>
      <form className={css.form} onSubmit={handleSubmit}>
        <label className={css.labelWrapper}>
          <span className={css.label}>Email:</span>
          <input
            className={css.input}
            type="text"
            placeholder="Enter your email"
            name="email"
            onChange={handleChange}
            value={email}
          />
        </label>
        <label className={css.labelWrapper}>
          <span className={css.label}>Password:</span>
          <input
            className={css.input}
            placeholder="Enter your password"
            type={typeInput ? 'password' : 'text'}
            name="password"
            onChange={handleChange}
            value={password}
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
