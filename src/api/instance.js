import axios from "axios";

const key = "dc4175c627af7306fa7cf26b20f58420";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: key,
    "primary_release_date.lte": "2023-06-01",
    "primary_release_date.gte": "2012-01-01",
  },
  timeout: 8000,
});

export default instance;

/**

  //get one movie by id (550)
  ///movie/550

  // another page
  ///discover/movie?page=2

  // all movie genre
  ///genre/movie/list`

  // filter with date ( genre id : 28 , date 2022)
  ///discover/movie?with_genres=28&primary_release_date.gte=2023

/discover/movie?with_genres=28&sort_by=RELEASE_DATE
*POPULARITY
*VOTE_AVERAGE
*REVENUE
*.DESC
*/

/**
https://api.themoviedb.org/3/discover/movie?with_genres=28&sort_by=RELEASE_DATE/api_key=dc4175c627af7306fa7cf26b20f58420
*/
