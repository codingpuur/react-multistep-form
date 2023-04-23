import React from 'react'
import Home from './components/Home'
import "./App.css"

const App = () => {
  return (
    <div  className='bg h-screen flex-col  lg:flex w-full justify-center items-center    text-pink-500  text-center  '>
      <p className='bg-[#E5EC17] font-[myfont] text-2xl sm:text-3xl md:text-7xl w-fit mx-auto'>

      sahil egg shop
      </p>
      <p className='md:text-4xl font-[myfont] w-fit mx-auto bg-[#E5EC17] text-sm sm:text-2xl'>make your omlet own</p>
   <div className=''></div>
    <Home/>

    </div>
  )
}

export default App