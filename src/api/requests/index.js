import axios from 'axios';
import applyCaseMiddleware from 'axios-case-converter';
import Config from 'react-native-config';

const BASE_URL =
  Config.SERVER_URL || 'https://paw-tracks-staging.herokuapp.com';

const defaultHeaders = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

export const api = applyCaseMiddleware(
  axios.create({
    baseURL: BASE_URL,
    headers: defaultHeaders,
  }),
);

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
