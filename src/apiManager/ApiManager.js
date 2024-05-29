import axios from "axios";

const ApiManager = axios.create({
  baseURL: "http://localhost:8080/api/v1",
  responseType: "json",
  withCredentials: true,
});

export default ApiManager
