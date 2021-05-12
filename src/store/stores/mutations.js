import Vue from "vue";
import {
  GET_CATEGORIES_START,
  GET_CATEGORIES_SUCCESS,
  GET_CATEGORIES_ERROR,
  GET_STORE_START,
  GET_STORE_SUCCESS,
  GET_STORE_ERROR,
} from "./mutation-type";

export default {
  [GET_CATEGORIES_START](state) {
    Vue.set(state.categories, "pending", true);
    Vue.set(state.categories, "error", null);
  },
  [GET_CATEGORIES_SUCCESS](state, payload) {
    Vue.set(state.categories, "pending", false);
    Vue.set(state.categories, "data", payload);
  },
  [GET_CATEGORIES_ERROR](state, payload) {
    Vue.set(state.categories, "pending", false);
    Vue.set(state.categories, "error", payload);
  },
  [GET_STORE_START](state) {
    Vue.set(state.info, "pending", true);
    Vue.set(state.info, "error", null);
  },
  [GET_STORE_SUCCESS](state, payload) {
    Vue.set(state.info, "pending", false);
    Vue.set(state.info, "data", payload);
  },
  [GET_STORE_ERROR](state, payload) {
    Vue.set(state.info, "pending", false);
    Vue.set(state.info, "error", payload);
  },
};
