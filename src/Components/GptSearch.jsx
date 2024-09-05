import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMOvieSuggestion from './GptMOvieSuggestion'
import BackGround_Img from "../Images/IN-en-20240827-TRIFECTA-perspective_WEB_c292a608-cdc6-4686-8dc8-405bfcf753af_medium.jpg"

const GptSearch = () => {
  return (
    <div>
         <div className="absolute -z-10">
        <img src={BackGround_Img} alt="" />
      </div>
        <GptSearchBar />
        <GptMOvieSuggestion />
    </div>
  )
}

export default GptSearch