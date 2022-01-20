import { Navigate, Outlet } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const RequireAuth = () => {
  const [value] = useAuth();

  return (
    value ? <Outlet /> : <Navigate to="/signin" />
  );
};

export default RequireAuth;
