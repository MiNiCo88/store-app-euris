import actions from "./actions";
// import getters from "./getters";
import mutations from "./mutations";

export function initialState() {
  return {
    items: {
      displayGrid: 1,
      pending: false,
      data: [],
      error: null,
    },
    categories: {
      pending: false,
      data: [],
    },
    form: {
      pending: false,
      item: {},
      error: null,
    },
    actions: {
      deleting: false,
    },
  };
}

export default {
  namespaced: true,
  state: initialState,
  actions,
  // getters,
  mutations,
};
