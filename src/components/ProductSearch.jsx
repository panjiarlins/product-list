import React from 'react';

const ProductSearch = ({ keyword, onSearch }) => {
  return (
    <input
      type='text'
      placeholder='Search product'
      value={keyword}
      onChange={onSearch}
      className='w-full rounded-lg px-4 py-2 bg-white'
    />
  );
};

export default ProductSearch;
