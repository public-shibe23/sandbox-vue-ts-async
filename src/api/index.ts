import axios from 'axios';
import { BASE_URL } from "../setting";

function get(url: string, params?: object) {
  return axios
    .get(url, { params })
    .then(res => {
      return res;
    })
    .catch(error => {
      console.log(error);
      return error;
    });
}

export async function fetchProducts(params?: object) {
  const URL = `${BASE_URL}/data`;
  const res = await get(URL, params);
  return res.data;
}
