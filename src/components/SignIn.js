import React, { useState } from 'react';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <form>
      <label htmlFor="email">Email</label>
      <input type="email" id="email" value="" onChange={(e) => handleEmail(e.target.value)} />
      <label htmlFor="password">Password</label>
      <input type="password" id="password" value="" onChange={(e) => handlePassword(e.target.value)} />
      <button type="submit">Sign in</button>
    </form>
  );
};
