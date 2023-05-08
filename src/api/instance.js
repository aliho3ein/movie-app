import axios from "axios";

const key = "dc4175c627af7306fa7cf26b20f58420";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: key,
    "primary_release_date.lte": "2023-06-01",
    "primary_release_date.gte": "2000-01-01",
  },
  timeout: 8000,
});

export default instance;
