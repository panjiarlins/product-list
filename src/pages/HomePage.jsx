import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getAllProducts } from '../utils/local-data';
import ProductAppBody from '../components/ProductAppBody';

const HomePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get('keyword') || '';
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(() => getAllProducts());
  }, []);

  const onSearchHandler = ({ target }) => {
    setSearchParams({
      keyword: target.value,
    });
  };

  return (
    <>
      <ProductAppBody
        products={products}
        keyword={keyword}
        onSearch={onSearchHandler}
      />
    </>
  );
};

export default HomePage;
