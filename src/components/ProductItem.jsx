import React from 'react';
import { Link } from 'react-router-dom';

const ProductItem = ({ id, imageUrl, name, description, price }) => {
  return (
    <Link to={`/products/${id}`}>
      <div className='bg-white rounded-lg overflow-hidden'>
        <img className='aspect-square object-cover' src={imageUrl} alt={name} />
        <div className='p-[5%]'>
          <div className='text-[1em] font-semibold'>{name}</div>
          <div className='text-[0.8em] font-light text-[#7C7A7A]'>
            {description}
          </div>
          <div className='text-[1em] font-medium'>
            Rp{price.toLocaleString('id-ID')}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductItem;
