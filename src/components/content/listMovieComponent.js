import React from "react";

export function ListMovieComponent({ popularMovies }) {
  return popularMovies.map((movie, i) => {
    return (
      <div className="w-[20%] bg-[gray-500] text-white" key={i}>
        <img
          className="bg-cover"
          src={`${process.env.REACT_APP_BASEIMGURL}/${movie.poster_path}`}
        />
        <div className="text-sm font-semibold bg-[]">
          <p> {movie.title} </p>
          <p>{movie.release_date}</p>
          <p>{movie.vote_average}</p>
        </div>
      </div>
    );
  });
}
