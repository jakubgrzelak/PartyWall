import axios from 'axios';
import { Platform } from 'react-native';

// import applyCaseMiddleware from 'axios-case-converter';
import Config from 'react-native-config';

// In order for axios to work on android emulator one have to provide its
// own IP address 

const platforrmBasedDevHost = Platform.OS === 'android' ? '192.168.0.108' : 'localhost'
const BASE_URL = Config.SERVER_URL || `http://${platforrmBasedDevHost}:3000`;

const defaultHeaders = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

export const api = axios.create({
  baseURL: BASE_URL,
  headers: defaultHeaders,
});

export const setToken = (token) => {
  if (token) {
    api.defaults.headers.common.Authorization = `Bearer ${token}`;
  } else {
    delete api.defaults.headers.common.Authorization;
  }
};

export const baseGet = ({ url, data }) => api.get(url, data);
export const basePost = ({ url, data }) => api.post(url, data);
export const basePut = ({ url, data }) => api.put(url, data);
export const basePatch = ({ url, data }) => api.patch(url, data);
export const baseDelete = ({ url }) => api.delete(url);
