let products = [
  {
    id: 'products-1',
    imageUrl:
      'https://images.unsplash.com/photo-1621303837174-89787a7d4729?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=436&q=80',
    name: 'Product 1',
    description: 'qwertyuiop',
    price: 10000,
  },
  {
    id: 'products-2',
    imageUrl:
      'https://images.unsplash.com/photo-1621303837174-89787a7d4729?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=436&q=80',
    name: 'Product 2',
    description: 'qwertyuiop',
    price: 20000,
  },
  {
    id: 'products-3',
    imageUrl:
      'https://images.unsplash.com/photo-1621303837174-89787a7d4729?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=436&q=80',
    name: 'Product 3',
    description: 'qwertyuiop',
    price: 30000,
  },
  {
    id: 'products-4',
    imageUrl:
      'https://images.unsplash.com/photo-1621303837174-89787a7d4729?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=436&q=80',
    name: 'Product 4',
    description: 'qwertyuiop',
    price: 40000,
  },
  {
    id: 'products-5',
    imageUrl:
      'https://images.unsplash.com/photo-1621303837174-89787a7d4729?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=436&q=80',
    name: 'Product 5',
    description: 'qwertyuiop',
    price: 50000,
  },
];

function getAllProducts() {
  return products;
}

function getProduct(id) {
  return products.find((product) => product.id === id);
}

function addProduct({ imageUrl, name, description, price }) {
  products = [
    ...products,
    {
      id: `product-${+new Date()}`,
      imageUrl,
      name,
      description,
      price: Number(price),
    },
  ];
}

function editProduct({ id, imageUrl, name, description, price }) {
  products = products.map((product) => {
    if (product.id === id) {
      return {
        ...product,
        imageUrl,
        name,
        description,
        price: Number(price),
      };
    }
    return product;
  });
}

function deleteProduct(id) {
  products = products.filter((product) => product.id !== id);
}

export { getAllProducts, getProduct, addProduct, editProduct, deleteProduct };