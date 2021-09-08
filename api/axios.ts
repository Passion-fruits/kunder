import axios, { AxiosError } from "axios";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "./../lib/export/localstorage";

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_DOMAIN,
  timeout: 100000,
});
let isTokenRefreshing = false;
let refreshSubscribers = [];

const onTokenRefreshed = (accessToken) => {
  refreshSubscribers.map((callback) => callback(accessToken));
};

const addRefreshSubscriber = (callback) => {
  refreshSubscribers.push(callback);
};

instance.interceptors.request.use(
  (config) => {
    return config;
  },
  function (error: AxiosError) {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const {
      config,
      response: { status },
    } = error;
    const originalRequest = config;
    if (status === 401) {
      if (!isTokenRefreshing && localStorage.getItem(REFRESH_TOKEN)) {
        // isTokenRefreshing이 false인 경우에만 token refresh 요청
        isTokenRefreshing = true;
        const refreshToken = localStorage.getItem(REFRESH_TOKEN);
        axios({
          url: `${process.env.NEXT_PUBLIC_API_DOMAIN}refresh`,
          method: "get",
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${refreshToken}`,
          },
        })
          .then((res) => {
            const data = res.data;
            const accessToken = data.access_token;
            // 새로운 토큰 저장
            localStorage.setItem(ACCESS_TOKEN, accessToken);
            localStorage.setItem(REFRESH_TOKEN, "");
            isTokenRefreshing = false;
            axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
            // 새로운 토큰으로 지연되었던 요청 진행
            onTokenRefreshed(accessToken);
          })
          .catch((err) => {
            localStorage.setItem(ACCESS_TOKEN, "");
            localStorage.setItem(REFRESH_TOKEN, "");
            return Promise.reject(error);
          });
      } else {
        localStorage.setItem(ACCESS_TOKEN, "");
        localStorage.setItem(REFRESH_TOKEN, "");
        return Promise.reject(error);
      }
      // token이 재발급 되는 동안의 요청은 refreshSubscribers에 저장
      const retryOriginalRequest = new Promise((resolve) => {
        addRefreshSubscriber((accessToken) => {
          originalRequest.headers.Authorization = "Bearer " + accessToken;
          resolve(axios(originalRequest));
        });
      });
      return retryOriginalRequest;
    }
    return Promise.reject(error);
  }
);

export default instance;
