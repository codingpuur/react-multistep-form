import React from 'react'

const FormThree = ({form ,setForm}) => {
  return (
    <div className=' '>

    <select value={form.spice} onChange={(e)=>setForm({...form,spice:e.target.value})} class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
      <option>coriander leaves</option>
      <option>cumin</option>
      <option>turmeric</option>
      <option>garam masala</option>
      <option> red chili powder</option>
      <option>chaat masala</option>
      <option>All</option>
 
      
    </select>
    
</div>
  )
}

export default FormThree