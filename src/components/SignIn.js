import React, { useState } from 'react';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <form>
      <label htmlFor="email">Email</label>
      <input type="email" id="email" value="" />
      <label htmlFor="password">Password</label>
      <input type="password" id="password" value="" />
      <button type="submit">Sign in</button>
    </form>
  );
};
