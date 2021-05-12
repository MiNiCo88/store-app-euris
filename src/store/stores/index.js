import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";

export function initialState() {
  return {
    info: {
      pending: false,
      data: null,
      error: null,
    },
    categories: {
      pending: false,
      data: [],
      error: null,
    },
  };
}

export default {
  namespaced: true,
  state: initialState,
  actions,
  getters,
  mutations,
};
