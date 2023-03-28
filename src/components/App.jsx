import { Route, Routes } from 'react-router-dom';
import { Home } from 'pages/HomePage/HomePage';
import { CashflowPage } from '../pages/CashflowPage/CashflowPage'
import { Layout } from './Layout/Layout';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import ToggleLanguages from './ToggleLanguages';
import ExampleForToggleLanguages from './ExampleForToggleLanguages';
// import PublicRoute from './PublicRoute/PublicRoute';
// import DynamicsPage from '../pages/DynamicsPage/DynamicsPage'

// import { lazy } from 'react';

export const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
      {/* <Route path="/" element={<PrivateRoute />}> */}
        <Route path="plan" element={<div>OwnPlanPage</div>} />
        <Route path="/cash-flow" element={<CashflowPage/>} />
        <Route path="dynamics" element={<div>OwnPlanPage</div>} />
        <Route path="expenses" element={<div>Expenses and Categories</div>} />
        <Route path="*" element={<div>Not Found Page</div>} />
      {/* </Route> */}
    </Routes>
    <ToggleLanguages />
    <ExampleForToggleLanguages />
    </>
  );
};