// import { lazy } from 'react';

import { Route, Routes, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Home } from 'pages/HomePage/HomePage';
import { Layout } from './Layout/Layout';
import { useSearchParams } from 'react-router-dom';

import PrivateRoute from './PrivateRoute/PrivateRoute';
import ToggleLanguages from './ToggleLanguages';
import ExampleForToggleLanguages from './ExampleForToggleLanguages';
import PublicRoute from './PublicRoute/PublicRoute';

import DynamicsPage from '../pages/DynamicsPage/DynamicsPage';
import { ModalView } from './Modal/ModalView';
import { Modal } from './Modal/Modal';
import { ModalLogin } from './Modal/ModalLogin';
import { ModalRegister } from './Modal/ModalRegister';
import { Verified } from './Modal/Verified';
import ModalPopUp from './Modal/ModalPopUp';
import StatisticPage from 'pages/StatisticPage/StatisticPage';

import { OwnPlanPage } from 'pages/OwnPlanPage/OwnPlanPage';

import ExpensesList from './ExpensesList/ExpensesList';
import CategoriesStatistic from './CategoriesStatistic/CategoriesStatistic';
import authOperations from 'redux/auth/auth-operations';
import { useEffect } from 'react';

export const App = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const email = searchParams.get('email');
    const password = searchParams.get('password');
    if (email && password) {
      dispatch(authOperations.login({ email, password }))
        .then(res => {
          setSearchParams('');
        })
        .catch(err => {
          console.log(err);
        });
    }
  }, [dispatch, navigate, searchParams, setSearchParams]);
  return (
    <>
     
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          <Route path="verify/:verificationToken" element={<Verified />} />
          <Route path="/" element={<PrivateRoute />}>
            <Route path="personal-plan" element={<OwnPlanPage/>} />
            <Route path="cashflow" element={<div>ExpensesPage</div>} />

            <Route path="dynamics" element={<DynamicsPage />} />

            <Route path="statistics" element={<StatisticPage />}>
              <Route path="transactions" element={<ExpensesList />} />
              <Route path="categories" element={<CategoriesStatistic />} />
            </Route>

            <Route path="*" element={<div>Not Found Page</div>} />
          </Route>
        </Route>

        <Route path="/" element={<PublicRoute />}>
          <Route
            path="login"
            element={
              <ModalView>
                <Modal>
                  <ModalLogin />
                </Modal>
              </ModalView>
            }
          /> 

          <Route
            path="register"
            element={
              <ModalView>
                <Modal>
                  <ModalRegister />
                </Modal>
              </ModalView>
            }
          />
        </Route>
      </Routes>

      <ToggleLanguages />
      <ExampleForToggleLanguages />
    </>
  );
};