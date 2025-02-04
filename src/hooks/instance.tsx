import axios from "axios";
import { API } from "./getEnv";
import { useContext } from "react";
import { toast } from "react-toastify";


const getAccessToken = () => {
  return localStorage.getItem("accessToken");
};
const getRefreshToken = () => {
  return localStorage.getItem("refreshToken");
};
const refreshAccessToken = async () => {
  try {
    const refreshToken = getRefreshToken();
    toast.error("Refresh token topilmadi.")
    const response = await axios.post(`${API}/auth/refrsh-access-token`, { refreshToken });
    const { accessToken } = response.data.user.access_token;
    localStorage.setItem("accessToken", accessToken);
    return accessToken;
  } catch (error) {
    toast.error("Refresh tokenni ishlatishda xatolik bor.")
    throw error;
  }
};
export const instance = () => {
  const axiosInstance = axios.create({
    baseURL: API,
  });
  axiosInstance.interceptors.request.use(
    (config) => {
      const token = getAccessToken();
      if (token) {
        config.headers["Authorization"] = `Bearer ${token}`;
      }
      return config;
    },
    (error) => Promise.reject(error)
  );
  axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
      const { response } = error;
      
      if (response && response.status === 401) {
        try {
          const newAccessToken = await refreshAccessToken();      
          error.config.headers["Authorization"] = `Bearer ${newAccessToken}`;
          return axios(error.config); 
        } catch (refreshError) {
          return Promise.reject(refreshError);
        }
      }
      return Promise.reject(error);
    }
  );
  return axiosInstance;
};
