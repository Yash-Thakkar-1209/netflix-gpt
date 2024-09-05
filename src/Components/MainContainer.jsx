import React from "react";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies.nowPlayingMovies);

  if (!movies) return null;

  const movie = movies[2];

  if (!movie) return null;


  const { original_title, overview, id } = movie;

  return (
    <div>
     
      <VideoTitle original_title={original_title} overview={overview} />

      <VideoBackground movieId={id}/>
      
    </div>
  );
};

export default MainContainer;
