import axiosClient from "./axiosClient";

const catergoryApi = {
  getAll() {
    const url = `/catergories`;
    return axiosClient.get(url);
  },

  get(id) {
    const url = `/catergories/${id}`;
    return axiosClient.get(url);
  },

  addcatergory(data) {
    const url = `/catergories`;
    return axiosClient.post(url, data);
  },

  updatecatergory(data) {
    const url = `/catergories/${data.id}`;
    return axiosClient.put(url, data);
  },

  deletecatergory(id) {
    const url = `/catergories/${id}`;
    return axiosClient.delete(url);
  },
};

export default catergoryApi;
