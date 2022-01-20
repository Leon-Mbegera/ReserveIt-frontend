import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export const AuthContext = React.createContext();

export const Context = ({ children }) => {
  const [authorized, setAuthorized] = useState(null);

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    setAuthorized(accessToken);
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
