import axios, { AxiosError } from "axios";

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_DOMAIN,
  timeout: 100000,
});
instance.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error: AxiosError) {
    return Promise.reject(error);
  }
);
instance.interceptors.response.use(
  function (response) {
    return response;
  },

  function (error: AxiosError) {
    return Promise.reject(error);
  }
);
export default instance;
