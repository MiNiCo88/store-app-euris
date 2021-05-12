import services from "@/services";
import {
  GET_CATEGORIES_START,
  GET_CATEGORIES_SUCCESS,
  GET_CATEGORIES_ERROR,
  GET_STORE_START,
  GET_STORE_SUCCESS,
  GET_STORE_ERROR,
} from "./mutation-type";

export default {
  fetchCategories(store, payload) {
    store.commit(GET_CATEGORIES_START);
    services.Stores.getStoreCategories(payload).then(({ data }) => {
      store.commit(GET_CATEGORIES_SUCCESS, data, (error) => {
        store.commit(GET_CATEGORIES_ERROR, error);
      });
    });
  },
  fetchStore(store, payload) {
    store.commit(GET_STORE_START);
    services.Stores.getStore(payload).then(
      ({ data }) => {
        store.commit(GET_STORE_SUCCESS, data);
      },
      (error) => {
        store.commit(GET_STORE_ERROR, error);
      }
    );
  },
};
