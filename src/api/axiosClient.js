import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://61e0f1e463f8fc0017618955.mockapi.io/api/products",
  headers: {
    "content-type": "application/json",
  },
});

export default axiosClient;
