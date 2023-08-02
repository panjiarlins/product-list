import React from 'react';
import ProductItem from './ProductItem';

const ProductsList = ({ products }) => {
  return (
    <div className='mt-5'>
      {products.length ? (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 200px))',
            gap: '3%',
          }}
        >
          {products.map((product) => (
            <ProductItem key={product.id} {...product} />
          ))}
        </div>
      ) : (
        <div className='product-list-empty'>
          <p>Product empty</p>
        </div>
      )}
    </div>
  );
};

export default ProductsList;
