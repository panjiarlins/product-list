import { api } from '../api/axios';

async function loginUser({ email, password }) {
  try {
    const response = await api.get('/users', {
      params: {
        email: email.trim(),
        password: password.trim(),
      },
    });

    if (!response.data.length) {
      alert('Wrong email/password!');
      return { error: true, data: null };
    }

    return { error: false, data: response.data[0] };
  } catch (error) {
    console.log(error);
  }
}

async function getUserLogged({ id }) {
  const response = await api.get(`/users/${id}`);

  if (!Object.keys(response.data).length) {
    return { error: true, data: null };
  }

  return { error: false, data: response.data };
}

async function getUserByEmail({ email }) {
  try {
    const response = await api.get('/users', {
      params: {
        email: email.trim(),
      },
    });
    return { data: response.data[0] };
  } catch (error) {
    console.log(error);
  }
}

async function registerUser({ name, email, password }) {
  try {
    const { data } = await getUserByEmail({ email });

    if (data) {
      throw new Error(`User with email:${email} is already exist!`);
    }

    const response = await api.post('/users', {
      id: `user-${+new Date()}`,
      name,
      email,
      password,
    });

    if (!Object.keys(response.data).length) {
      return { error: true };
    }

    return { error: false };
  } catch (error) {
    console.log(error);
    alert(error);
    return { error: true };
  }
}

async function getAllProducts() {
  try {
    return await api.get('/products');
  } catch (error) {
    console.log(error);
  }
}

async function getProduct(id) {
  try {
    return await api.get(`/products/${id}`);
  } catch (error) {
    console.log(error);
  }
}

async function getProductsByName(name) {
  try {
    return await api.get(`/products?name_like=${name}`);
  } catch (error) {
    console.log(error);
  }
}

async function addProduct({ imageUrl, name, description, price }) {
  try {
    return await api.post('/products', {
      id: `product-${+new Date()}`,
      imageUrl,
      name,
      description,
      price: Number(price),
    });
  } catch (error) {
    console.log(error);
  }
}

async function editProduct({ id, imageUrl, name, description, price }) {
  try {
    return api.patch(`/products/${id}`, {
      imageUrl,
      name,
      description,
      price: Number(price),
    });
  } catch (error) {
    console.log(error);
  }
}

async function deleteProduct(id) {
  try {
    return api.delete(`/products/${id}`);
  } catch (error) {
    console.log(error);
  }
}

export {
  loginUser,
  getUserLogged,
  registerUser,
  getAllProducts,
  getProduct,
  getProductsByName,
  addProduct,
  editProduct,
  deleteProduct,
};
