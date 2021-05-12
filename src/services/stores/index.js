class Stores {
  constructor(http) {
    this.http = http;
  }

  getStores() {
    return this.http.get("/stores");
  }

  getStore(id) {
    return this.http.get(`/stores/${id}`);
  }
}

export default Stores;
