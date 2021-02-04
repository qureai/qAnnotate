import axios from 'axios';
import { API_BASE_URL } from '../constants/apiConstants';

const TIMEOUT = 10000;

const serviceConnect = axios.create({
  baseURL: API_BASE_URL,
  timeout: TIMEOUT,
  withCredentials: true,
})

serviceConnect.interceptors.response.use(undefined, (err) => {
  const error = err.response
  /* eslint-disable no-console */
  console.error('Invalid request', err)
  if (error && error.status === 401) {
    window.location = '/login'
  }

  return Promise.reject(error)
})

export default serviceConnect
