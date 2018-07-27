import axios from "axios";

var instance = axios.create({
  baseURL: process.env.VUE_APP_BASE_API
});

export default instance;
