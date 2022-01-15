import axiosClient from "./axiosClient";

const productApi = {
  getAll() {
    const url = `/products`;
    return axiosClient.get(url);
  },

  get(id) {
    const url = `/products/${id}`;
    return axiosClient.get(url);
  },

  addProduct(data) {
    const url = `/products`;
    return axiosClient.post(url, data);
  },

  updateProduct(data) {
    const url = `/products/${data.id}`;
    return axiosClient.put(url, data);
  },

  deleteProduct(id) {
    const url = `/products/${id}`;
    return axiosClient.delete(url);
  },
};

export default productApi;
