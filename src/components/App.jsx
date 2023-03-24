import { Route, Routes } from 'react-router-dom';
// import { lazy } from 'react';
import { Suspense } from 'react';

// const Home = lazy(() => import('pages/HomePage/HomePage'));
// const Loader = lazy(() => import('components/Loader/Loader'));
// import PrivateRoute from './PrivateRoute/PrivateRoute';
// import PublicRoute from './PublicRoute/PublicRoute';
import { Home } from 'pages/HomePage/HomePage';
import Loader from './Loader/Loader';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import PublicRoute from './PublicRoute/PublicRoute';

export const App = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={'SharedLayout'}></Route>
          <Route index element={<Home />} />
          <Route path="/" element={<PublicRoute />}>
            <Route path="login" element={<div>Login page</div>} />
            <Route path="register" element={<div>Registration page</div>} />
          </Route>
          <Route path="/" element={<PrivateRoute />}>
            <Route path="plan" element={<div>OwnPlanPage</div>} />
            <Route path="cash-flow" element={<div>ExpensesPage</div>} />
            <Route path="dynamics" element={<div>OwnPlanPage</div>} />
            <Route
              path="expenses"
              element={<div>Expenses and Categories</div>}
            />
            <Route path="*" element={<div>Not Found Page</div>} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};
