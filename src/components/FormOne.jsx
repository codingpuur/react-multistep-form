import React from 'react'
import { useState } from 'react';

const FormOne = ({form , setForm}) => {
 
 
  
  return (
    <div className=' space-y-5'>

<select value={form.typeegg}  onChange={(e)=>setForm({...form, typeegg:e.target.value})} class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
          <option value="Brown egg">Brown egg</option>
          <option value="White egg">White egg</option>
          
        </select>
        <select value={form.no} onChange={(e)=>setForm({...form, no:e.target.value})} class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        
          
        </select>
        
    </div>
  )
}

export default FormOne