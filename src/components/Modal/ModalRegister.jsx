import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { RotatingLines } from 'react-loader-spinner';
import css from './Modals.module.css';
import { BsEyeSlashFill } from 'react-icons/bs';
import { BsEye } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import authOperations from 'redux/auth/auth-operations';
import { saveCredentials } from 'redux/auth/auth-slice';
import { selectIsLoading } from 'redux/auth/auth-selectors';

const emailRegexp =
  /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)$/;

export const ModalRegister = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const [typeInput, setTypeInput] = useState(true);
  const [isLookPwd, setIsLookPwd] = useState(false);
  const [isSendEmail, setIsSendEmail] = useState(false);
  const isLoading = useSelector(selectIsLoading);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'password':
        return setPassword(value);
      case 'email':
        return setEmail(value);
      default:
        return;
    }
  };

  const onSubmit = data => {
    dispatch(authOperations.register(data))
      .unwrap()
      .then(res => {
        console.log(25)
        setIsSendEmail(prev => !prev);
        dispatch(saveCredentials(data));
      })
      .catch(error => console.log(error));
  };

  const handleToggleEye = () => {
    setIsLookPwd(prev => !prev);
    setTypeInput(prev => !prev);
  };

  return !isSendEmail ? (
    <div className={css.box}>
      <p className={css.title}>Registration</p>
      <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
        <label>
          <span className={css.label}>Name:</span>
          <input
            {...register('name', {
              required: 'name is required',
              minLength: {
                value: 3,
                message: 'length must be min 3',
              },
              maxLength: {
                value: 30,
                message: 'length must be max 30',
              },
            })}
            className={css.input}
            placeholder="Enter your name"
            type="text"
            name="name"
            onChange={handleChange}
            value={name}
            disabled={isLoading}
          />
          <div className={css.error}>
            {errors?.name && <p>{errors?.name?.message || 'Error'}</p>}
          </div>
        </label>
        <label>
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
            placeholder="Enter your email"
            type="text"
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
            placeholder="Create password"
            className={css.input}
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
        </label>
        <button disabled={isLoading} className={css.btn} type="submit">
          {isLoading ? (
            <RotatingLines
              strokeColor="#f3f3f3"
              strokeWidth="5"
              animationDuration="0.75"
              width="20"
              visible={true}
            />
          ) : (
            'Sign Up'
          )}
        </button>
      </form>
    </div>
  ) : (
    <div className={css.box}>
      <p className={css.wasSendTitle}>
        Verification link was send to email {email}
      </p>
      <p className={css.wasSendTitle}>Check it to continue registration...</p>
    </div>
  );
};
