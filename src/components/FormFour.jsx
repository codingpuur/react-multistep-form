import React from 'react'

const FormFour = ({form ,setForm}) => {
  return (
    <div className=' '>

    <select value={form.cooked} onChange={(e)=>setForm({...form,cooked:e.target.value})} class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
      <option>grilled</option>
      <option>sautéed</option>
    
 
      
    </select>
    
</div>
  )
}

export default FormFour