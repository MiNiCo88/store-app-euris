import Vue from "vue";
import {
  GET_PRODUCTS_START,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_PRODUCT_START,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_ERROR,
  ADD_PRODUCT_START,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_ERROR,
  DELETE_PRODUCT_START,
  DELETE_PRODUCT_SUCCESS,
  SET_DISPLAY,
} from "./mutation-type";

export default {
  [GET_PRODUCTS_START](state) {
    Vue.set(state.items, "pending", true);
    Vue.set(state.items, "error", null);
  },
  [GET_PRODUCTS_SUCCESS](state, payload) {
    Vue.set(state.items, "pending", false);
    Vue.set(state.items, "data", payload);
  },
  [GET_PRODUCTS_ERROR](state, payload) {
    Vue.set(state.items, "pending", false);
    Vue.set(state.items, "error", payload);
  },
  [GET_PRODUCT_START](state) {
    Vue.set(state.form, "pending", true);
    Vue.set(state.form, "error", null);
  },
  [GET_PRODUCT_SUCCESS](state, payload) {
    Vue.set(state.form, "pending", false);
    Vue.set(state.form, "item", payload);
  },
  [GET_PRODUCT_ERROR](state, payload) {
    Vue.set(state.form, "pending", false);
    Vue.set(state.form, "error", payload);
  },
  [DELETE_PRODUCT_START](state) {
    Vue.set(state.actions, "deleting", true);
  },
  [DELETE_PRODUCT_SUCCESS](state) {
    Vue.set(state.actions, "deleting", false);
  },
  [ADD_PRODUCT_START](state) {
    Vue.set(state.form, "pending", true);
  },
  [ADD_PRODUCT_SUCCESS](state) {
    Vue.set(state.form, "pending", false);
  },
  [ADD_PRODUCT_ERROR](state, payload) {
    Vue.set(state.form, "pending", false);
    Vue.set(state.form, "error", payload);
  },
  [SET_DISPLAY](state, payload) {
    Vue.set(state.items, "displayGrid", payload);
  },
};
