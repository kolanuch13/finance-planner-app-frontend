import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { selectToken } from 'redux/auth/auth-selectors';

export default function PublicRoute() {
  const token = useSelector(selectToken);
  return token ? <Navigate to="/personal-plan" /> : <Outlet />;
}
