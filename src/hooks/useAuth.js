import { useContext } from 'react';

const useAuth = () => {
  const accessToken = localStorage.getItem('accessToken');
  return useContext(accessToken);
};

export default useAuth;
