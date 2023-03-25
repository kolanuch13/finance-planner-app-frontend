import { Route, Routes } from 'react-router-dom';
import { Home } from 'pages/HomePage/HomePage';
// import DynamicsPage from '../pages/DynamicsPage/DynamicsPage'
import { Layout } from './Layout/Layout';
import PrivateRoute from './PrivateRoute/PrivateRoute';
// import PublicRoute from './PublicRoute/PublicRoute';

// import { lazy } from 'react';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/" element={<PrivateRoute />}>
          {/* <Route path="/personal-plan" element={<OwnPlanPage />} /> */}
          {/* <Route path="/cashflow" element={<CashflowPage />} /> */}
          {/* <Route path="/dynamics" element={<DynamicsPage />} /> */}
          {/* <Route path="/statistic" element={<StatisticPage />}>
              <Route path="/expenses" element={<Expenses />} />
              <Route path="/expenses" element={<Categories />} />
            </Route> */}
          <Route path="*" element={<p>Not found</p>} />
        </Route>
      </Route>
    </Routes>
  );
};
