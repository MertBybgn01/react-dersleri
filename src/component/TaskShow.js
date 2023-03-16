import React from 'react'

export default function TaskShow({taskid, taskdes ,taskname}) {
  return (
    <div className='w-[380px] flex flex-col gap-2 h-[200px] p-3 rounded-xl bg-slate-200 '>
        <h2 className=' font-semibold  text-xl  '>Gorevimizin adi</h2>
        {taskname}
        <h2 className=' font-semibold  text-xl  '> Gorevimizin aciklamasi</h2>
        {taskdes}
        <div className='flex justify-center items-center gap-4'>
            <button className='w-20 h-7  rounded  bg-red-600 text-white  text-sm'> delete</button>
            <button className='w-20 h-7 rounded  bg-green-700 text-white  text-sm'> uptodate</button>
        </div>
    </div>
  )
}
