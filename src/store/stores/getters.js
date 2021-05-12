export default {
  getCategories: (store) =>
    store.categories.data.reduce((acc, cur) => [...acc, cur.category], []),
};
