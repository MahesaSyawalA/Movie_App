import React from "react";

export function ListMovieComponent({ popularMovies }) {
  return popularMovies.map((movie, i) => {
    return (
      <div className=" rounded-lg w-[20%] flex items-end h-96 bg-[gray-500] bg-cover  text-[#DDE6ED] group hover:shadow-inner " 
      style={{
        backgroundImage: `url(${process.env.REACT_APP_BASEIMGURL}/${movie.poster_path})`,
      }}
      key={i} >
        <div className=" w-full transition duration-500 opacity-0 text-sm font-semibold rounded-b-md bg-[#526D82] group-hover:bg-[#526D82] group-hover:opacity-100 ">
          <p> {movie.title} </p>
          <p>{movie.release_date}</p>
          <p>{movie.vote_average}</p>
        </div>
      </div>
    );
  });
}
