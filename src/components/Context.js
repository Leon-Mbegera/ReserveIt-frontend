import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Authenticate } from '../containers/APIs';
import { saveCurrentUser } from '../actions/index';

export const AuthContext = React.createContext();

const Context = ({ children }) => {
  const [authorized, setAuthorized] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    Authenticate(accessToken).then((userData) => {
      dispatch(saveCurrentUser(userData.current_user));
      setAuthorized(userData.current_user);
    });
  }, []);

  return (
    <AuthContext.Provider value={[authorized, setAuthorized]}>
      {children}
    </AuthContext.Provider>
  );
};

Context.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Context;
