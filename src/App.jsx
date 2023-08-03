import React, { useEffect, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';
import NotFoundPage from './pages/NotFoundPage';
import AddProductPage from './pages/AddProductPage';
import EditProductPage from './pages/EditProductPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import { getUserLogged } from './utils/api';
import LogoutButton from './components/LogoutButton';

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('user')));
  }, []);

  const onLoginSuccessHandler = async ({ id }) => {
    getUserLogged({ id }).then(({ data }) => {
      localStorage.setItem('user', JSON.stringify(data));
      setUser(data);
    });
  };

  const onLogoutHandler = () => {
    localStorage.removeItem('user');
    setUser(null);
  };

  if (!user) {
    return (
      <main>
        <Routes>
          <Route
            path='/'
            element={<LoginPage loginSuccess={onLoginSuccessHandler} />}
          />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/*' element={<Navigate to='/' />} />
        </Routes>
      </main>
    );
  }

  return (
    <>
      <LogoutButton onLogout={onLogoutHandler} />
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
