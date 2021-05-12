import services from "@/services";
import {
  GET_PRODUCTS_START,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_PRODUCT_START,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_ERROR,
  DELETE_PRODUCT_START,
  DELETE_PRODUCT_SUCCESS,
  SET_DISPLAY,
  ADD_PRODUCT_START,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_ERROR,
} from "./mutation-type";

export default {
  fetchProducts(store, payload) {
    store.commit(GET_PRODUCTS_START);
    services.Products.getProducts(payload).then(({ data }) => {
      store.commit(GET_PRODUCTS_SUCCESS, data, (error) => {
        store.commit(GET_PRODUCTS_ERROR, error);
      });
    });
  },
  fetchProduct(store, payload) {
    store.commit(GET_PRODUCT_START);
    services.Products.getProduct(payload).then(
      ({ data }) => {
        store.commit(GET_PRODUCT_SUCCESS, data);
      },
      (error) => {
        store.commit(GET_PRODUCT_ERROR, error);
      }
    );
  },
  addProduct(store, payload) {
    store.commit(ADD_PRODUCT_START);
    return new Promise((resolve, reject) => {
      services.Products.addProduct(payload)
        .then(
          ({ data }) => {
            store.commit(ADD_PRODUCT_SUCCESS);
            resolve(data);
          },
          (error) => {
            store.commit(ADD_PRODUCT_ERROR, error);
            reject(error);
          }
        )
        .catch((error) => {
          store.commit(ADD_PRODUCT_ERROR, error);
          reject(error);
        });
    });
  },
  deleteProduct(store, payload) {
    store.commit(DELETE_PRODUCT_START);
    return new Promise((resolve, reject) => {
      services.Products.deleteProduct(payload)
        .then(
          () => {
            store.commit(DELETE_PRODUCT_SUCCESS);
            resolve();
          },
          (error) => {
            store.commit(DELETE_PRODUCT_SUCCESS);
            reject(error);
          }
        )
        .catch((error) => {
          store.commit(DELETE_PRODUCT_SUCCESS);
          reject(error);
        });
    });
  },
  setDisplay(store, payload) {
    store.commit(SET_DISPLAY, payload);
  },
};
