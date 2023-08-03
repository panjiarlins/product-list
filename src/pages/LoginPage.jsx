import React from 'react';
import { loginUser } from '../utils/api';
import LoginInput from '../components/LoginInput';
import { Link, useNavigate } from 'react-router-dom';

const LoginPage = ({ loginSuccess }) => {
  const navigate = useNavigate();

  const onLoginHandler = ({ email, password }) => {
    loginUser({ email, password }).then(({ error, data }) => {
      if (!error) {
        loginSuccess(data);
        navigate('/');
      }
    });
  };

  return (
    <div className='p-[5%] mx-auto'>
      <div className='font-extrabold text-2xl text-center'>Login</div>
      <LoginInput onLogin={onLoginHandler} />
      <div className='mt-4'>
        Don't have account?{' '}
        <Link to='/register' className='text-cyan-600'>
          Register
        </Link>
      </div>
    </div>
  );
};

export default LoginPage;
