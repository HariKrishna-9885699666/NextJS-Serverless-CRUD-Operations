import axios from 'axios';

const setupAxios = () => {
  const baseURL = `/api`;
  const instance = axios.create({
    baseURL
  });
  
  return instance;
};

export default setupAxios;