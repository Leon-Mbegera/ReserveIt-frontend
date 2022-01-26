import { Navigate, Outlet } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const RequireAuth = () => {
  const [authorize] = useAuth();

  return (
    authorize ? <Outlet /> : <Navigate to="/signin" />
  );
};

export default RequireAuth;
