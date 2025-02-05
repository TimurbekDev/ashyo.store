import axios from "axios";
import { API } from "./getEnv";

const getRefreshToken = () => {
  return localStorage.getItem("refreshToken");
};

let refreshingToken: any = null;

const refreshAccessToken = async () => {
  if (!refreshingToken) {
    refreshingToken = axios.post(`${API}/auth/refrsh-access-token`, { refreshToken: getRefreshToken() })
      .then((response) => {
        localStorage.setItem("accessToken", response.data.access_token);
        return response.data.access_token;
      })
      .finally(() => {
        refreshingToken = null;
      });
  }
  return refreshingToken;
};

export const instance = () => {
  const axiosInstance = axios.create({
    baseURL: API,
  });

  axiosInstance.interceptors.request.use((config) => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  });

  axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
      const refreshToken = getRefreshToken();

      if (error.response?.status === 401 && refreshToken) {
        try {
          const newAccessToken = await refreshAccessToken();
          if (newAccessToken) {
            error.config.headers.Authorization = `Bearer ${newAccessToken}`;
            return axiosInstance(error.config);
          }
        } catch (err) {
          console.error("Failed to refresh token", err);
        }
      }
      if (error.response.status == 401) {
        return Promise.reject(error.response.status)
      }

      return Promise.reject(error);
    }
  );

  return axiosInstance;
};
  