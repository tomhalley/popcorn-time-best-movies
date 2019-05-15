import axios from 'axios';
import { API_ROOT_URL } from '../consts';
import LocalStorage from '../../utils/local-storage';

export const getAvailablePages = category => axios.get(`${API_ROOT_URL}/${category}`);

export const getDataByPage = (category, page) => {
  const url = `${API_ROOT_URL}/${category}/${page}`;
  const cachedData = LocalStorage.getItem(url);
  if (cachedData === null) {
    return axios.get(`${API_ROOT_URL}/${category}/${page}`)
      .then(({ data }) => {
        LocalStorage.setItem(url, data);
        return data;
      });
  }

  return Promise.resolve(cachedData);
};
