import axios from "axios";
import { useState } from "react";

const apiKey = process.env.REACT_APP_APIKEY;
const baseUrl = process.env.REACT_APP_BASEURL;


// export const movieList=(yo)=>{
//     const [list,setList] = useState(`popular`)
//     setList(yo)
// }
export const getMovieList = async (filter = "popular") => {
  const movie = await axios.get(`${baseUrl}/movie/${filter}?api_key=${apiKey}`);
  return movie.data.results;
};

export const searchMovie = async (q) => {
  const search = await axios.get(
    `${baseUrl}/search/movie?query=${q}&api_key=${apiKey}`
  );
  return search.data;
};

export const discoverMovie = async () => {
  const details = await axios
    .get(`${baseUrl}/discover/movie?api_key=${apiKey}`)
    .then((res) => {
       return res.data.results;
    });
  return details;
};
