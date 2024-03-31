import axios from 'axios';
import { getAccessToken, isTokenExpired, setAccessToken } from './token';
import { API_URI } from './constant';
import { fetchRefreshToken } from '../thunk/auth';

// Create an instance of Axios without the access token interceptor
const axiosInstance = axios.create({
  baseURL: `${API_URI}`,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json', 'Accept': 'application/json'
  }
});

const axiosWithAuthToken = axios.create({
  baseURL: `${API_URI}`,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json', 'Accept': 'application/json'
  }
});

// Add a request interceptor
axiosWithAuthToken.interceptors.request.use(
  async function (config) {
    let accessToken = getAccessToken();

    if (accessToken !== "") {
      console.log(accessToken, 'accessToken');
      const isExpaired = isTokenExpired(accessToken);
      if (isExpaired) {
        try {
          accessToken = await fetchRefreshToken().token;
        } catch (error) {
          return Promise.reject(error);
        }
      }
    }

    // Modify config headers
    config.headers['authorization'] = `Bearer ${accessToken}`;
    config.headers['Content-Type'] = 'application/json';

    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

export { axiosInstance, axiosWithAuthToken };
