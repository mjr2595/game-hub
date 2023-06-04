import axios from "axios";
import { baseURL, secretKey } from "../../config.ts";

export default axios.create({
  baseURL: baseURL,
  params: {
    key: secretKey,
  },
});
