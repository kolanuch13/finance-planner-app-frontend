import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import css from './Modals.module.css';
import { BsEyeSlashFill } from 'react-icons/bs';
import { BsEye } from 'react-icons/bs';
import authOperations from 'redux/auth/auth-operations';
import { RotatingLines } from 'react-loader-spinner';
import { selectIsLoading } from 'redux/auth/auth-selectors';

const emailRegexp =
  /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)$/;

export const ModalLogin = () => {
  const isLoading = useSelector(selectIsLoading);
  const [invalidError, setInvalidError] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const [typeInput, setTypeInput] = useState(true);
  const [isLookPwd, setIsLookPwd] = useState(false);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

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

  const onSubmit = data => {
    dispatch(authOperations.login(data))
      .unwrap()
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        setInvalidError('Invalid password');
        console.error(error);
      });
  };

  const handleToggleEye = () => {
    setIsLookPwd(prev => !prev);
    setTypeInput(prev => !prev);
  };

  return (
    <div className={css.box}>
      <p className={css.title}>Log In</p>
      <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
        <label className={css.labelWrapper}>
          <span className={css.label}>Email:</span>
          <input
            {...register('email', {
              required: 'email is required',
              pattern: {
                value: emailRegexp,
                message: 'invalid email address',
              },
            })}
            className={css.input}
            type="text"
            placeholder="Enter your email"
            name="email"
            onChange={handleChange}
            value={email}
            disabled={isLoading}
          />
          <div className={css.error}>
            {errors?.email && <p>{errors?.email?.message || 'Error'}</p>}
          </div>
        </label>
        <label className={css.labelWrapper}>
          <span className={css.label}>Password:</span>
          <input
            {...register('password', {
              required: 'password is required',
              minLength: {
                value: 6,
                message: 'length must be min 6',
              },
            })}
            className={`${css.input} ${invalidError && css.error} ${
              invalidError && css.error_border
            }`}
            placeholder="Enter your password"
            type={typeInput ? 'password' : 'text'}
            name="password"
            onChange={handleChange}
            value={password}
            disabled={isLoading}
          />
          <span className={css.eye} onClick={handleToggleEye}>
            {isLookPwd ? <BsEye /> : <BsEyeSlashFill />}
          </span>
          <div className={css.error}>
            {errors?.password && <p>{errors?.password?.message || 'Error'}</p>}
          </div>
          <div className={css.error}>{invalidError}</div>
        </label>
        <button type="submit" className={css.btn}>
          {isLoading ? (
            <RotatingLines
              strokeColor="#f3f3f3"
              strokeWidth="5"
              animationDuration="0.75"
              width="20"
              visible={true}
            />
          ) : (
            'Log in'
          )}
        </button>
      </form>
    </div>
  );
};
