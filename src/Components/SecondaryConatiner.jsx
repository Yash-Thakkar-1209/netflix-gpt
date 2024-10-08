import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryConatiner = () => {

  const movies = useSelector((store) => store.movies);

  if (!movies) return <div><h1>Loading...</h1></div>

  return (
    <div className="bg-black w-screen">
      {movies && (
        <div className="-mt-52 pl-12 relative z-20">
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Popular"} movies={movies.popularMovies} />
          <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
          <MovieList title={"Upcoming"} movies={movies.upComingMovies} />
        </div>
      )}
    </div>
  );
};

export default SecondaryConatiner;
