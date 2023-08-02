import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { deleteProduct, getProduct } from '../utils/local-data';
import DeleteProductButton from '../components/DeleteProductButton';
import EditProductButton from '../components/EditProductButton';

const DetailPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState();

  useEffect(() => {
    setProduct(() => getProduct(id));
  }, [id]);

  const onDeleteHandler = () => {
    deleteProduct(id);
    navigate('/');
  };

  if (!product) {
    return <div>Product is not found</div>;
  }

  return (
    <div className='grid grid-cols-1 gap-4 p-[5%] mx-auto'>
      <div className='absolute top-[-30%] left-[-25vw] -z-10 rounded-b-[50%] w-[150vw] bg-black h-[60%]'></div>
      <img
        className='w-full aspect-square object-cover rounded-xl shadow'
        src={product.imageUrl}
        alt={product.name}
      />
      <div className='flex justify-between'>
        <div className='font-bold text-xl'>{product.name}</div>
        <div className='text-xl'>Rp{product.price.toLocaleString('id-ID')}</div>
      </div>
      <div className='text-base'>{product.description}</div>
      <EditProductButton id={id} />
      <DeleteProductButton onDelete={onDeleteHandler} />
    </div>
  );
};

export default DetailPage;
