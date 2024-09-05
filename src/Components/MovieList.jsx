import React from 'react'
import MovieCards from './MovieCards'
import './MovieList.css';

const MovieList = ({movies, title}) => {

  return (
    <div className='p-6'>
      <h1 className='text-3xl text-white font-bold py-6'>{title}</h1>
     <div className='flex overflow-x-scroll no-scrollbar'>
      <div className='flex'>
      {
        movies?.map((movie) => (<MovieCards key={movie.id} poster_path={movie.poster_path} />))
      }
      </div>
     </div>
        

    </div>
  )
}

export default MovieList