import axios from "axios";
//const axios = require("axios");

export const userApi = axios.create({
  baseURL: "https://reqres.in/api",
});
