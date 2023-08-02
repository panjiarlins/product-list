import React from 'react';
import { Link } from 'react-router-dom';

const EditProductButton = ({ id }) => {
  return (
    <Link to={`/products/edit/${id}`}>
      <div className='p-2 w-full rounded-lg text-center bg-green-500 text-white'>
        Edit Product
      </div>
    </Link>
  );
};

export default EditProductButton;
