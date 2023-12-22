import axios from "axios";

const axiosApi = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

axiosApi.interceptors.request.use(
  (config) => {
    return config;
  },

  (error) => {
    return Promise.reject(error);
  }
);

axiosApi.interceptors.response.use(
  (response) => {
    return response;
  },

  (error) => {
    return Promise.reject(error);
  }
)

export default axiosApi;