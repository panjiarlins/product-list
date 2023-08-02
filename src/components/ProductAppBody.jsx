import React from 'react';
import ProductSearch from './ProductSearch';
import ProductsList from './ProductsList';
import AddProductButton from './AddProductButton';

const ProductAppBody = ({ products, keyword, onSearch }) => {
  return (
    <div className='p-[5%] mx-auto'>
      <ProductSearch keyword={keyword} onSearch={onSearch} />
      <ProductsList
        products={
          keyword.trim() === ''
            ? products
            : products.filter((product) =>
                product.name
                  .trim()
                  .toLowerCase()
                  .includes(keyword.trim().toLowerCase())
              )
        }
      />
      <AddProductButton />
    </div>
  );
};

export default ProductAppBody;
