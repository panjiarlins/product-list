import React from 'react';
import EditProductInput from '../components/EditProductInput';
import { editProduct } from '../utils/local-data';
import { useNavigate } from 'react-router-dom';

const EditProductPage = () => {
  const navigate = useNavigate();

  const onEditProductHandler = ({ id, imageUrl, name, description, price }) => {
    editProduct({ id, imageUrl, name, description, price });
    navigate('/');
  };
  return (
    <div className='p-[5%] mx-auto'>
      <div className='font-extrabold text-2xl text-center'>Edit Product</div>
      <EditProductInput onEditProduct={onEditProductHandler} />
    </div>
  );
};

export default EditProductPage;
