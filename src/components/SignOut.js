import { Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const SignOut = () => {
  const setAuthorized = useAuth()[1];
  setAuthorized(null);
    <Navigate to="/home" />;
};

export default SignOut;
