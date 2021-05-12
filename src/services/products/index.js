class Products {
  constructor(http) {
    this.http = http;
  }

  getProducts(storeId) {
    return this.http.get(`/stores/${storeId}/products`);
  }

  getProduct({ storeId, id }) {
    return this.http.get(`/stores/${storeId}/products/${id}`);
  }

  addProduct(storeId, payload) {
    return this.http.post(`/stores/${storeId}/products`, payload);
  }

  deleteProduct({ storeId, id }) {
    return this.http.delete(`/stores/${storeId}/products/${id}`);
  }
}

export default Products;
