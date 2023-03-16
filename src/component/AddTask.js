import React, { useState } from 'react'

export default function AddTask({onsubmit}) {
    const [name ,setName]= useState('');
    const [description , setDescription] = useState('');
   const handlChange = (e) =>{
       setName(e.target.value)
   }
 const hendlSubmit =(e)=> {
   e.preventDefault();
   onsubmit(name,description)

   setName('');
   setDescription('');

 }
  return (
    <div className='w-[450px] p-6 bg--500 mt-12'>
        <form className='flex  flex-col gap-5'>
          <label>Task Name </label>
          <input value={name} onChange={handlChange} className=' border-2  border-green-500 border-solid  outline-none' />
          <label>Task Descriptions</label>
          <textarea value={description} onChange={(e)=>{
            setDescription(e.target.value);
            
          }} rows={5} className=' border-2  border-green-500 border-solid  outline-none'  maxLength='200'  />
          <button  onClick={hendlSubmit}  className=' mx-auto w-[120px] rounded-lg h-10 bg-gray-700'>Add Task</button>
        </form>
    </div>
  )
}
