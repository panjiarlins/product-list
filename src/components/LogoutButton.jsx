import React from 'react';
import { BiLogOutCircle } from 'react-icons/bi';
import { IconContext } from 'react-icons';

const LogoutButton = ({ onLogout }) => {
  return (
    <IconContext.Provider value={{ color: 'grey', size: '3em' }}>
      <BiLogOutCircle
        onClick={onLogout}
        className='fixed top-4 left-4 border rounded-full shadow-xl bg-white cursor-pointer'
      />
    </IconContext.Provider>
  );
};

export default LogoutButton;
