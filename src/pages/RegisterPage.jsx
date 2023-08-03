import React from 'react';
import { registerUser } from '../utils/api';
import RegisterInput from '../components/RegisterInput';
import { Link, useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const navigate = useNavigate();
  const onRegisterHandler = ({ name, email, password }) => {
    registerUser({ name, email, password }).then(
      ({ error }) => !error && navigate('/')
    );
  };

  return (
    <div className='p-[5%] mx-auto'>
      <div className='font-extrabold text-2xl text-center'>Register</div>
      <RegisterInput onRegister={onRegisterHandler} />
      <div className='mt-4'>
        Already have an account?{' '}
        <Link to='/' className='text-cyan-600'>
          Login
        </Link>
      </div>
    </div>
  );
};

export default RegisterPage;
