import axios from 'axios';
import { API_ROOT_URL } from '../consts';

export const getAvailablePages = category => axios.get(`${API_ROOT_URL}/${category}`);

export const getDataByPage = (category, page) => axios.get(`${API_ROOT_URL}/${category}/${page}`)
  .then(({ data }) => data);
