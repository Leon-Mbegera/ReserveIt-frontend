import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const SignOut = () => {
  const setAuthorized = useAuth()[1];
  useEffect(() => {
    setAuthorized(null);
  }, []);

  return (
    <Navigate to="/" />
  );
};

export default SignOut;
