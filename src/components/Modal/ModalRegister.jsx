import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { RotatingLines } from 'react-loader-spinner';
import css from './Modals.module.css';
import { useTranslation } from 'react-i18next';
import { BsEyeSlashFill } from 'react-icons/bs';
import { BsEye } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import authOperations from 'redux/auth/auth-operations';
import { saveCredentials } from 'redux/auth/auth-slice';
import { selectIsLoading } from 'redux/auth/auth-selectors';

const emailRegexp =
  /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)$/;

export const ModalRegister = () => {
  const { t } = useTranslation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const [typeInput, setTypeInput] = useState(true);
  const [isLookPwd, setIsLookPwd] = useState(false);
  const [isSendEmail, setIsSendEmail] = useState(false);
  const isLoading = useSelector(selectIsLoading);
  const [isInUse, setIsInUse] = useState('');

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value.trimStart());
      case 'password':
        return setPassword(value.trim());
      case 'email':
        return setEmail(value.trim());
      default:
        return;
    }
  };

  const onSubmit = data => {
    dispatch(authOperations.register(data))
      .unwrap()
      .then(res => {
        setIsSendEmail(prev => !prev);
        dispatch(saveCredentials(data));
      })
      .catch(error => {
        setIsInUse(t('registration.emailInUse'));
        console.log(error);
      });
  };

  const handleToggleEye = () => {
    setIsLookPwd(prev => !prev);
    setTypeInput(prev => !prev);
  };

  return !isSendEmail ? (
    <div className={css.box}>
      <p className={css.title}>{t('registration.title')}</p>
      <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
        <label>
          <span className={css.label}>{t('registration.name')}</span>
          <input
            {...register('name', {
              required: t('registration.requiredName'),
              minLength: {
                value: 3,
                message: t('registration.nameStandartMin'),
              },
              maxLength: {
                value: 30,
                message: t('registration.nameStandartMax'),
              },
            })}
            className={css.input}
            placeholder={t('registration.placeholderName')}
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
          <span className={css.label}>{t('registration.email')}</span>
          <input
            {...register('email', {
              required: t('registration.requiredEmail'),
              pattern: {
                value: emailRegexp,
                message: t('registration.emailStandart'),
              },
            })}
            className={css.input}
            placeholder={t('registration.placeholderEmail')}
            type="text"
            name="email"
            onChange={handleChange}
            value={email}
            disabled={isLoading}
          />
          <div className={css.error}>
            {errors?.email && <p>{errors?.email?.message || 'Error'}</p>}
          </div>
          <div className={css.error}>{!errors?.email?.message && isInUse}</div>
        </label>
        <label className={css.labelWrapper}>
          <span className={css.label}>{t('registration.password')}</span>
          <input
            {...register('password', {
              required: t('registration.requiredPassword'),
              minLength: {
                value: 6,
                message: t('registration.passwordStandart'),
              },
            })}
            placeholder={t('registration.placeholderPassword')}
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
              strokeColor="gray"
              strokeWidth="5"
              animationDuration="0.75"
              width="13"
              visible={true}
            />
          ) : (
            t('registration.buttonSignUp')
          )}
        </button>
      </form>
    </div>
  ) : (
    <div className={css.box}>
      <p className={css.wasSendTitle}>
        {t('verificationSend.verificationSendFirst')}{' '}
        <span className={css.email}>{email}</span>
      </p>
      <p className={css.wasSendTitle}>
        {t('verificationSend.verificationSendSecond')}
      </p>
    </div>
  );
};
