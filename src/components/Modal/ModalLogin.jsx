import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import css from './Modals.module.css';
import { useTranslation } from 'react-i18next';
import { BsEyeSlashFill } from 'react-icons/bs';
import { BsEye } from 'react-icons/bs';
import authOperations from 'redux/auth/auth-operations';
import { RotatingLines } from 'react-loader-spinner';
import { selectIsLoading } from 'redux/auth/auth-selectors';

const emailRegexp =
  /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)$/;

export const ModalLogin = () => {
  const { t } = useTranslation();
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
        return setPassword(value.trim());
      case 'email':
        return setEmail(value.trim());
      default:
        return;
    }
  };

  const onSubmit = data => {
    dispatch(authOperations.login(data))
      .unwrap()
      .then()
      .catch(error => {
        setInvalidError(t('login.invalidPassword'));
        console.error(error);
      });
  };

  const handleToggleEye = () => {
    setIsLookPwd(prev => !prev);
    setTypeInput(prev => !prev);
  };

  return (
    <div className={css.box}>
      <p className={css.title}>{t('login.title')}</p>
      <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
        <label className={css.labelWrapper}>
          <span className={css.label}>{t('login.email')}</span>
          <input
            {...register('email', {
              required: t('login.requiredEmail'),
              pattern: {
                value: emailRegexp,
                message: t('login.emailStandart'),
              },
            })}
            className={css.input}
            type="text"
            placeholder={t('login.placeholderEmail')}
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
          <span className={css.label}>{t('login.password')}</span>
          <input
            {...register('password', {
              required: t('login.requiredPassword'),
              minLength: {
                value: 6,
                message: t('login.passwordStandart'),
              },
            })}
            className={`${css.input} ${invalidError && css.error_border}`}
            placeholder={t('login.placeholderPassword')}
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
          <div className={css.error}>
            {!errors?.password?.message && invalidError}
          </div>
        </label>
        <button type="submit" className={css.btn}>
          {isLoading ? (
            <RotatingLines
              strokeColor="gray"
              strokeWidth="5"
              animationDuration="0.75"
              width="12.5"
              visible={true}
            />
          ) : (
            t('login.buttonSignIn')
          )}
        </button>
      </form>
    </div>
  );
};
