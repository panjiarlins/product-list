import { api } from '../api/axios';

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
  getAllProducts,
  getProduct,
  getProductsByName,
  addProduct,
  editProduct,
  deleteProduct,
};
