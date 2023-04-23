import React from 'react'
import Form from './Form'
import { useState } from 'react';
import egg from "../egg.png"
import pan from "../pan.png"
import hen from "../hen.png"
import spices from "../spice.png"
import grill from "../grill.png"


const Home = () => {
  const [state, setstate] = useState(0);


function pageno(data){
  setstate(data)
}


const image =[egg,pan,spices,grill,hen]


  return (
    <div className='  relative  w-2/3  backdrop-blur-[3px] bg-white/40 m-auto rounded-xl align-bottom lg:flex  lg:space-x-5  px-3 py-4'>
        
        <div  className='  w-full h-28 sm:h-40 md:h-60  lg:h-[34rem]  font-mono  flex justify-center items-center  animate-fobj'>
         <img className=' h-28 sm:h-48 lg:h-full' src={image[state]} alt="" />
        </div>
        <div  className='bg-white/90  shadow-lg  h-80 w-full lg:h-[34rem]  rounded-md py-10  '>
          <Form pagess={pageno}/>
        </div>
        
        </div>
  )
}

export default Home