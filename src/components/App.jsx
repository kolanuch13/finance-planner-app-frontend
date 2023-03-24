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
          <Route path="/" element={'Layout'}></Route>
          <Route index element={<Home />} />
          <Route path="/" element={<PublicRoute />}>
            <Route path="/login" element={'Login page'} />
            <Route path="/register" element={'Registration page'} />
          </Route>
          <Route path="/" element={<PrivateRoute />}>
            <Route path="/diary" element={<DairyPage />} />
            <Route path="/calculator" element={<Calculator />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};
