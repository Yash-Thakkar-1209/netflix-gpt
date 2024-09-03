import React, { useState } from 'react'
import Header from './Header'
import BackGround_Img from "../Images/IN-en-20240827-TRIFECTA-perspective_WEB_c292a608-cdc6-4686-8dc8-405bfcf753af_medium.jpg"

const Login = () => {

    const [ signInForm, setSignInForm ] = useState(true)

  return (
    <div>
        <Header />
        <div className='absolute'>
        <img src={BackGround_Img} alt="" />
        </div>
        <form className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>

            <h1 className='font-bold text-3xl py-4'>{signInForm ? "Sign In" : "Sign Up"}</h1>
            {
                !signInForm && <input type="text" placeholder='First Name' className='p-4 my-4 w-full bg-slate-600 rounded-lg' />
            }

            <input type="text" placeholder='Email-Address' className='p-4 my-4 w-full bg-slate-600 rounded-lg' />

            <input type="text" placeholder='password' className='p-4 my-4 w-full bg-slate-600 rounded-lg' />

            <button className='p-4 my-6 bg-red-700 w-full rounded-lg'>{signInForm ? "Sign In" : "Sign Up"}</button>

            <p className='py-4 cursor-pointer' onClick={() => setSignInForm(!signInForm)}>{ signInForm ? "New to Netflix? Sign Up Now!" : "Already Registered? Sign In Now!" }</p>
            
        </form>
    </div>
  )
}

export default Login