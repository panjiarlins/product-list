import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';
import NotFoundPage from './pages/NotFoundPage';
import AddProductPage from './pages/AddProductPage';
import EditProductPage from './pages/EditProductPage';

const App = () => {
  return (
    <>
      <main>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/products/:id' element={<DetailPage />} />
          <Route path='/products/edit/:id' element={<EditProductPage />} />
          <Route path='/add-product' element={<AddProductPage />} />
          <Route path='/*' element={<NotFoundPage />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
