import axios from "axios";

const api = axios.create({
  baseURL: "https://us-central1-estudo-974fe.cloudfunctions.net",
});
export default api;
