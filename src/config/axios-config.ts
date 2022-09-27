import axios from "axios";

import { API_URL } from "./constants";

const initilizeHttpClient = () => {
  axios.defaults.baseURL = API_URL;
  axios.interceptors.request.use((config) => config);

  axios.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error) {
        return Promise.reject(error);
      }
    }
  );
};

export default initilizeHttpClient;
