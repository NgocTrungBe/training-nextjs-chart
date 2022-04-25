import axios, { AxiosRequestConfig,  } from 'axios';
import { loadFromStorage } from "@src/utils/storage";

const baseHeaders = (config: AxiosRequestConfig) => ({
  "Content-Type": "application/json, multipart/form-data",
  ...config.headers,
})

// Config App Axios
const appAPI = axios.create();
appAPI.defaults.baseURL = process.env.NEXT_PUBLIC_SERVER_URL;
appAPI.interceptors.request.use((config: AxiosRequestConfig) => {
  const { token } = loadFromStorage("user") || ''
  return {
    ...config,
    headers: {
      ...baseHeaders(config),
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
  }
})

export default appAPI;
