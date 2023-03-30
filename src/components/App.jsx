// import { lazy } from 'react';

import { Route, Routes } from 'react-router-dom';
import { Home } from 'pages/HomePage/HomePage';
import { Layout } from './Layout/Layout';

import PrivateRoute from './PrivateRoute/PrivateRoute';
// import ToggleLanguages from './ToggleLanguages';
// import ExampleForToggleLanguages from './ExampleForToggleLanguages';
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


export const App = () => {
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
      

            <Route path="statistic" element={<StatisticPage />} />

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

      {/* <ToggleLanguages />
      <ExampleForToggleLanguages /> */}
    </>
  );
};