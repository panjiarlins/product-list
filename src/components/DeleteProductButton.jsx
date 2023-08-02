import React from 'react';

const DeleteProductButton = ({ onDelete }) => {
  return (
    <div
      onClick={onDelete}
      className='p-2 w-full rounded-lg text-center bg-black text-white'
    >
      Delete Product
    </div>
  );
};

export default DeleteProductButton;
