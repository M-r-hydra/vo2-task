// Axios
import axios from "axios";
// Axios

// Constants
import { baseUrl as baseURL } from "./_servicesConstants";
// Constants

export const _axios = axios.create({
  baseURL,
});
