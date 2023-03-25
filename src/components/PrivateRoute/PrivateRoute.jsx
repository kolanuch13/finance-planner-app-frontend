import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { isLoggedIn } from 'redux/auth/auth-selectors';

export default function PrivateRoute() {
  const IsLoggedIn = useSelector(isLoggedIn);
  return IsLoggedIn ? <Outlet /> : <Navigate to="/login" />;
}
