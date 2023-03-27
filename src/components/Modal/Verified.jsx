import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { useLocation } from 'react-router-dom';
import authOperations from 'redux/auth/auth-operations';
import { getUser } from 'redux/auth/auth-selectors';
import css from './Verified.module.css';

export const Verified = props => {
  const location = useLocation();
  const verificationToken = location.pathname.split('/')[2];
  const [sec, setSec] = useState(5);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(getUser);
  console.log('--->', user);

  useEffect(() => {
    let intervalId;
    if (sec === 0) {
      clearInterval(intervalId);
      const credentials = {
        email: user.email,
        password: user.password,
      };
      dispatch(authOperations.login(credentials))
        .then(_ => navigate('/personal-plan'))
        .catch(err => console.log(err));
    }

    intervalId = setInterval(() => {
      setSec(prev => prev - 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [navigate, sec, verificationToken]);
  return (
    <div className={css.verifiedBox}>
      <div className={css.wrapper}>
        <p> &#9989; Email was verified successfully</p>
        <p>You will automatically log in and redirect in {sec}...</p>
      </div>
    </div>
  );
};
