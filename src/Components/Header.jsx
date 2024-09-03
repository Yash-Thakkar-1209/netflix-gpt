import React from 'react'
import Logo from "../Images/Netflix_Logo_PMS.png"

const Header = () => {
  return (
    <div className='absolute px-8 py-2 bg-gradient-to-b from-black z-10'>
        <img className='w-44' src={Logo} alt="" />
    </div>
  )
}

export default Header