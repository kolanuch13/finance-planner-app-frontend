/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { useLocation } from 'react-router-dom';
import authOperations from 'redux/auth/auth-operations';
import { getUser } from 'redux/auth/auth-selectors';
import { useTranslation } from 'react-i18next';
import css from './Verified.module.css';

export const Verified = props => {
  const { t } = useTranslation();
  const location = useLocation();
  const verificationToken = location.pathname.split('/')[2];
  const [sec, setSec] = useState(10);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(getUser);

  useEffect(() => {
    let intervalId = setInterval(() => {
      setSec(prev => prev - 1);
    }, 1000);
    if (sec === 0) {
      const credentials = {
        email: user.email,
        password: user.password,
      };
      setSec(prev => (prev = 0));
      dispatch(authOperations.verify({ verificationToken }))
        .then(_ => {
          dispatch(authOperations.login(credentials))
            .then(_ => {
              clearInterval(intervalId);
              navigate('/personal-plan');
            })
            .catch(err => console.log(err));
        })
        .catch(err => console.log(err.message));
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [sec]);
  return (
    <div className={css.verifiedBox}>
      <div className={css.wrapper}>
        <p> &#9989; {t('verifiedSuccess.verifiedSuccessFirst')}</p>
        <p>
          {t('verifiedSuccess.verifiedSuccessSecond')} {sec}...
        </p>
      </div>
    </div>
  );
};
