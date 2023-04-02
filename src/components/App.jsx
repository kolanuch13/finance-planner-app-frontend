import { lazy, useEffect } from 'react';
import { useSearchParams, Route, Routes, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Layout } from './Layout/Layout';

import authOperations from 'redux/auth/auth-operations';
import { balance } from 'redux/auth/auth-selectors'
import PrivateRoute from './PrivateRoute/PrivateRoute';
import PublicRoute from './PublicRoute/PublicRoute';

import { ModalView } from './Modal/ModalView';
import { Modal } from './Modal/Modal';
import { ModalLogin } from './Modal/ModalLogin';
import { ModalRegister } from './Modal/ModalRegister';
import { Verified } from './Modal/Verified';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const OwnPlanPage = lazy(() => import('pages/OwnPlanPage/OwnPlanPage'));
const CashflowPage = lazy(() => import('pages/CashflowPage/CashflowPage'));
const DynamicsPage = lazy(()=> import('pages/DynamicsPage/DynamicsPage'));
const StatisticPage = lazy(() => import('pages/StatisticPage/StatisticPage'));
const ExpensesList = lazy(() => import('./ExpensesList/ExpensesList'));
const CategoriesStatistic = lazy(() => import('./CategoriesStatistic/CategoriesStatistic'));

export const App = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const userBalance = useSelector(balance)

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
    dispatch(authOperations.current())
  }, [dispatch, navigate, searchParams, setSearchParams]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />

          <Route path="verify/:verificationToken" element={<Verified />} />
          <Route path="/" element={<PrivateRoute />}>
            <Route path="personal-plan" element={<OwnPlanPage />} />
            {userBalance && <>
            <Route path="cashflow" element={<CashflowPage/>} />

            <Route path="dynamics" element={<DynamicsPage />} />

            <Route path="statistics" element={<StatisticPage />}>
              <Route path="transactions" element={<ExpensesList />} />
              <Route path="categories" element={<CategoriesStatistic />} />
            </Route>
            </>}

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
    </>
  );
};
