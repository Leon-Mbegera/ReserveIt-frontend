import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Authenticate from '../containers/APIs';

export const AuthContext = React.createContext();

const Context = ({ children }) => {
  const [authorized, setAuthorized] = useState(null);

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    Authenticate(accessToken).then((userData) => {
      setAuthorized(userData);
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
