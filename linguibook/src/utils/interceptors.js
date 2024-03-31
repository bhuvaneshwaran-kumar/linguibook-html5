import axios from 'axios';
import { getAccessToken } from './token';
import { API_URI } from './constant';

// Create an instance of axios
const instance = axios.create({
  baseURL: `${API_URI}`,
  withCredentials: true,
  headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' }
  // Other custom configurations
});

// Add a request interceptor
instance.interceptors.request.use(
  function (config) {
    // Modify config headers
    config.headers['authorization'] = `Bearer ${getAccessToken()}`;
    config.headers['Content-Type'] = 'application/json';
    // You can add more default headers or modify existing ones here

    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

export default instance;
