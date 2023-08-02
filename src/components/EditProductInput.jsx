import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProduct } from '../utils/local-data';

const EditProductInput = ({ onEditProduct }) => {
  const { id } = useParams();
  const [imageUrl, setImageUrl] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  useEffect(() => {
    const product = getProduct(id);
    setImageUrl(product.imageUrl);
    setName(product.name);
    setDescription(product.description);
    setPrice(product.price);
  }, [id]);

  const onEditProductHandler = (event) => {
    event.preventDefault();
    onEditProduct({ id, imageUrl, name, description, price });
  };

  return (
    <form onSubmit={onEditProductHandler} className='grid grid-cols-1 gap-y-1'>
      <label
        htmlFor='editProduct-imageUrl'
        className='mt-8 text-sm text-slate-500'
      >
        Image Url
      </label>
      <input
        id='editProduct-imageUrl'
        type='text'
        placeholder='Image url'
        value={imageUrl}
        onChange={({ target }) => setImageUrl(target.value)}
        required
        className='p-2 rounded-lg border-slate-200 border-4'
      />

      <label htmlFor='editProduct-name' className='mt-4 text-sm text-slate-500'>
        Name
      </label>
      <input
        id='editProduct-name'
        type='text'
        placeholder='Name'
        value={name}
        onChange={({ target }) => setName(target.value)}
        required
        className='p-2 rounded-lg border-slate-200 border-4'
      />

      <label
        htmlFor='editProduct-description'
        className='mt-4 text-sm text-slate-500'
      >
        Description
      </label>
      <input
        id='editProduct-description'
        type='text'
        placeholder='Description'
        value={description}
        onChange={({ target }) => setDescription(target.value)}
        required
        className='p-2 rounded-lg border-slate-200 border-4'
      />

      <label
        htmlFor='editProduct-price'
        className='mt-4 text-sm text-slate-500'
      >
        Price
      </label>
      <input
        id='editProduct-price'
        type='text'
        placeholder='Price'
        value={price}
        onChange={({ target }) => setPrice(target.value)}
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

export default EditProductInput;
