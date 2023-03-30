// import { lazy } from 'react';

import { Route, Routes } from 'react-router-dom';
import { Home } from 'pages/HomePage/HomePage';
import { Layout } from './Layout/Layout';

import PrivateRoute from './PrivateRoute/PrivateRoute';
// import ToggleLanguages from './ToggleLanguages';
// import ExampleForToggleLanguages from './ExampleForToggleLanguages';
import PublicRoute from './PublicRoute/PublicRoute';

import DynamicsPage from '../pages/DynamicsPage/DynamicsPage';
import { Verified } from './Modal/Verified';
import {OwnPlanPage} from 'pages/OwnPlanPage/OwnPlanPage';
import Modal from './OwnPlan/ModalAddBalance/Modal/Modal';
import { ModalView } from './Modal/ModalView';
import ModalLogin from './HomePage/ModalLogin';
import ModalRegister from './HomePage/ModalRegister';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          <Route path="verify/:verificationToken" element={<Verified />} />
          <Route path="/" element={<PrivateRoute />}>
            <Route path="personal-plan" element={<OwnPlanPage/>} />
            <Route path="cash-flow" element={<div>ExpensesPage</div>} />
            <Route path="dynamics" element={<div>OwnPlanPage</div>} />
            <Route
              path="expenses"
              element={<div>Expenses and Categories</div>}
            />
            <Route path="*" element={<div>Not Found Page</div>} />
          </Route>

        </Route>
        {/* </Route> */}
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
      {/* <ToggleLanguages />
      <ExampleForToggleLanguages /> */}
    </>
  );
};
