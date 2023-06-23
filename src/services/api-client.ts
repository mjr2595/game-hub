import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "f2437dfa1f4b4c5a97c25aacce4514de",
  },
});
