import React, { useState } from 'react';

const LoginInput = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onLoginHandler = (event) => {
    event.preventDefault();
    onLogin({ email, password });
  };

  return (
    <form onSubmit={onLoginHandler} className='grid grid-cols-1 gap-y-1'>
      <label htmlFor='login-email' className='mt-8 text-sm text-slate-500'>
        Email
      </label>
      <input
        id='login-email'
        type='email'
        placeholder='Email'
        value={email}
        onChange={({ target }) => setEmail(target.value)}
        required
        className='p-2 rounded-lg border-slate-200 border-4'
      />

      <label htmlFor='login-password' className='mt-4 text-sm text-slate-500'>
        Password
      </label>
      <input
        id='login-password'
        type='password'
        placeholder='Password'
        value={password}
        onChange={({ target }) => setPassword(target.value)}
        required
        className='p-2 rounded-lg border-slate-200 border-4'
      />

      <button
        type='submit'
        className='mt-8 p-2 w-full rounded-lg text-center bg-black text-white'
      >
        Submit
      </button>
    </form>
  );
};

export default LoginInput;
