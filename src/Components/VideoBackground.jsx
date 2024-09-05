import React from "react";
import { useSelector } from "react-redux";
import useGetMovieTrailer from "../Hooks/useGetMovieTrailer";

const VideoBackground = ({ movieId }) => {
  const trailer = useSelector((store) => store.movies.getMovieTrailer);

  useGetMovieTrailer(movieId);

  return (
    <div className="w-screen">
      <iframe
        className="w-screen aspect-video"
        src={`https://www.youtube.com/embed/${trailer.key}?autoplay=1&mute=1&si=-7wBTbvkm5glHTIn`}
        title="YouTube video player"
        allow="autoplay; encrypted-media"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
