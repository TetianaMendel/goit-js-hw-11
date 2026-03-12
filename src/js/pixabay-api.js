
import axios from "axios";

const API_KEY = "55002165-1e4f2080ce8b2f6cba85ff2b5";
const BASE_URL = "https://pixabay.com/api/";

export function getImagesByQuery(query) {
  const params = {
    key: API_KEY,
    q: query,
    image_type: "photo",
    orientation: "horizontal",
    safesearch: true,
  };

  return axios.get(BASE_URL, { params })
    .then(response => response.data);
}
