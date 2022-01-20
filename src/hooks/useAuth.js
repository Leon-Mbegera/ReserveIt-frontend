import { useContext } from 'react';
import { AuthContext } from '../components/Context';

const useAuth = () => useContext(AuthContext);

export default useAuth;
