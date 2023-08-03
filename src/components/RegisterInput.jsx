import React, { useState } from 'react';

const RegisterInput = ({ onRegister }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onRegisterHandler = (event) => {
    event.preventDefault();
    onRegister({ name, email, password });
  };

  return (
    <form onSubmit={onRegisterHandler} className='grid grid-cols-1 gap-y-1'>
      <label htmlFor='register-name' className='mt-8 text-sm text-slate-500'>
        Name
      </label>
      <input
        id='register-name'
        type='text'
        placeholder='Name'
        value={name}
        onChange={({ target }) => setName(target.value)}
        required
        className='p-2 rounded-lg border-slate-200 border-4'
      />

      <label htmlFor='register-email' className='mt-4 text-sm text-slate-500'>
        Email
      </label>
      <input
        id='register-email'
        type='email'
        placeholder='Email'
        value={email}
        onChange={({ target }) => setEmail(target.value)}
        required
        className='p-2 rounded-lg border-slate-200 border-4'
      />

      <label
        htmlFor='register-password'
        className='mt-4 text-sm text-slate-500'
      >
        Password
      </label>
      <input
        id='register-password'
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

export default RegisterInput;
