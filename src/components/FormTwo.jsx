import React from 'react'

const FormTwo = ({form ,setForm}) => {
  return (
    <div className=' '>

            <select value={form.typecheese} onChange={(e)=>setForm({...form,typecheese:e.target.value})} class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
              <option>paneer</option>
              <option>mozzarella</option>
              <option>processed cheese</option>
         
              
            </select>
            
        </div>
  )
}

export default FormTwo