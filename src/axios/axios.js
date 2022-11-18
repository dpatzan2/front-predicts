import axios from "axios";

export const makeRequest = axios.create({
  baseURL: "https://drab-puce-puffer-sari.cyclic.app/api/",
  withCredentials: true,
});