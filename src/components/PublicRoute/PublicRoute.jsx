import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { isLoggedIn } from 'redux/auth/auth-selectors';

export default function PublicRoute() {
  const IsLoggedIn = useSelector(isLoggedIn);
  return IsLoggedIn ? <Navigate to="/personal" /> : <Outlet />;
}
