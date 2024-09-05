import React from 'react'
import {IMG_URL} from "../utils/constants"

const MovieCards = ({poster_path}) => {



  return (
    <div className='w-48 pr-4'>
      <img src={IMG_URL + poster_path} alt="MoviesCards" />
    </div>
  )
}

export default MovieCards