import React from 'react';
import { addProduct } from '../utils/api';
import { useNavigate } from 'react-router-dom';
import AddProductInput from '../components/AddProductInput';

const AddProductPage = () => {
  const navigate = useNavigate();

  const onAddProductHandler = ({ imageUrl, name, description, price }) => {
    addProduct({ imageUrl, name, description, price });
    navigate('/');
  };

  return (
    <div className='p-[5%] mx-auto'>
      <div className='font-extrabold text-2xl text-center'>Add Product</div>
      <AddProductInput onAddProduct={onAddProductHandler} />
    </div>
  );
};

export default AddProductPage;
