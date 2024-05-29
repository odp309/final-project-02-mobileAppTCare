import axios from "axios";

const ApiManager = axios.create({
  baseURL: "http://192.168.226.199:8080/api/v1",
  responseType: "json",
  withCredentials: true,
});

export default ApiManager
