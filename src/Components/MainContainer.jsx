import React from "react";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies.nowPlayingMovies);

  if (!movies) return null;

  const movie = movies[0];

  if (!movie) return null;
  console.log(movie);

  const { original_title, overview, id } = movie;

  return (
    <div>
      <VideoBackground movieId={id}/>
      <VideoTitle original_title={original_title} overview={overview} />
    </div>
  );
};

export default MainContainer;
