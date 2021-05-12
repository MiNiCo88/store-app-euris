import axios from "axios/index";
import Stores from "./stores";
import Products from "./products";
const api = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

const entities = {
  Stores: new Stores(api),
  Products: new Products(api),
};

export default { ...entities };
