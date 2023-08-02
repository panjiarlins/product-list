import React, { useState } from 'react';

const AddProductInput = ({ onAddProduct }) => {
  const [imageUrl, setImageUrl] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  const onAddProductHandler = (event) => {
    event.preventDefault();
    onAddProduct({ imageUrl, name, description, price });
  };

  return (
    <form onSubmit={onAddProductHandler} className='grid grid-cols-1 gap-y-1'>
      <label
        htmlFor='addProduct-imageUrl'
        className='mt-8 text-sm text-slate-500'
      >
        Image Url
      </label>
      <input
        id='addProduct-imageUrl'
        type='text'
        placeholder='Image url'
        value={imageUrl}
        onChange={({ target }) => setImageUrl(target.value)}
        required
        className='p-2 rounded-lg border-slate-200 border-4'
      />

      <label htmlFor='addProduct-name' className='mt-4 text-sm text-slate-500'>
        Name
      </label>
      <input
        id='addProduct-name'
        type='text'
        placeholder='Name'
        value={name}
        onChange={({ target }) => setName(target.value)}
        required
        className='p-2 rounded-lg border-slate-200 border-4'
      />

      <label
        htmlFor='addProduct-description'
        className='mt-4 text-sm text-slate-500'
      >
        Description
      </label>
      <input
        id='addProduct-description'
        type='text'
        placeholder='Description'
        value={description}
        onChange={({ target }) => setDescription(target.value)}
        required
        className='p-2 rounded-lg border-slate-200 border-4'
      />

      <label htmlFor='addProduct-price' className='mt-4 text-sm text-slate-500'>
        Price
      </label>
      <input
        id='addProduct-price'
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

export default AddProductInput;
