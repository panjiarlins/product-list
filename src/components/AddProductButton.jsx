import React from 'react';
import { Link } from 'react-router-dom';
import { IoAddCircleOutline } from 'react-icons/io5';
import { IconContext } from 'react-icons';

const AddProductButton = () => {
  return (
    <IconContext.Provider value={{ color: 'grey', size: '3em' }}>
      <Link to='/add-product'>
        <IoAddCircleOutline className='fixed bottom-4 right-4 border rounded-full shadow-xl bg-white' />
      </Link>
    </IconContext.Provider>
  );
};

export default AddProductButton;
