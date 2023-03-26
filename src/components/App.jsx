import { Route, Routes } from 'react-router-dom';
// import { lazy } from 'react';
import { Suspense } from 'react';

import Home from '../pages/HomePage/HomePage';
import DynamicsPage from '../pages/DynamicsPage/DynamicsPage';
import Loader from './Loader/Loader';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import PublicRoute from './PublicRoute/PublicRoute';
import Header from './Header/header/Header';

export const App = () => {
  return (
    <>
      <Header></Header>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<PublicRoute />}>
            <Route path="/dynamics" element={<DynamicsPage />} />
            <Route index element={<Home />} />
            <Route path="/login" element={<p>'Login page'</p>} />
            <Route path="/register" element={<p>'Registration page'</p>} />
          </Route>
          <Route path="/" element={<PrivateRoute />}>
            {/* <Route path="/personal-plan" element={<OwnPlanPage />} /> */}
            {/* <Route path="/cashflow" element={<CashflowPage />} /> */}

            {/* <Route path="/statistic" element={<StatisticPage />}>
              <Route path="/expenses" element={<Expenses />} />
              <Route path="/expenses" element={<Categories />} />
            </Route> */}
            <Route path="*" element={<p>Not found:</p>} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};
