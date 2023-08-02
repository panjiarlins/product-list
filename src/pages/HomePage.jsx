import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getAllProducts, getProductsByName } from '../utils/api';
import ProductAppBody from '../components/ProductAppBody';

const HomePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get('keyword') || '';
  const name_like = searchParams.get('name_like') || '';
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (name_like) {
      getProductsByName(name_like).then(({ data }) => {
        setProducts(data);
      });
    }

    if (!name_like) {
      getAllProducts().then(({ data }) => {
        setProducts(data);
      });
    }
  }, [name_like]);

  const onSearchHandler = (keyword) => {
    setSearchParams({ name_like: keyword });
  };

  return (
    <ProductAppBody
      products={products}
      keyword={keyword}
      onSearch={onSearchHandler}
    />
  );
};

export default HomePage;
