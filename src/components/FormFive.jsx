import React from 'react'

const FormFive = ({form ,setForm}) => {
  return (
    <div className=' '>

            <select value={form.meat} onChange={(e)=>setForm({...form,meat:e.target.value})} class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
              <option>chicken tikka</option>
              <option>meat keema</option>
              <option>seekh kebab</option>
         
              
            </select>
            
        </div>
  )
}

export default FormFive