import Vue from "vue";
import Vuex from "vuex";
import products from "./products";
import stores from "./stores";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    products,
    stores,
  },
});
