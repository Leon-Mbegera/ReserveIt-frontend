import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import navigation from '../data/navigation';
import { resetCurrentUser } from '../actions/index';

const SignOut = () => {
  const dispatch = useDispatch();
  navigation();

  const setAuthorized = useAuth()[1];
  useEffect(() => {
    setAuthorized(null);
    dispatch(resetCurrentUser(null));
  }, []);

  return (
    <Navigate to="/" />
  );
};

export default SignOut;
