import React from 'react'

const VideoTitle = ({overview, original_title}) => {
  return (
    <div className=' w-screen aspect-video pt-[20%] px-12 absolute text-white bg-gradient-to-r from-black'>
       <h1 className='text-6xl font-bold '>{original_title}</h1>
       <p className='py-6 text-lg w-1/4'>{overview}</p>
       <div>
        <button className='bg-white text-black p-4 px-14 text-xl hover:bg-opacity-90 rounded-lg'> Play</button>
        <button className='mx-2 bg-slate-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg'>More Info</button>
       </div>
    </div>
  )
}

export default VideoTitle