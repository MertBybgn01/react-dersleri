import React, { useState } from "react";

export default function SearchBar({ search }) {
  const handlFormSubmit = (event) => {
    event.preventDefault();
    search(value);
  };
  const [value ,setValue] = useState('')
  const handlChange = (event) =>{
     setValue(event.target.value)
     
  }
  return (
    <div>
      <form className=" flex flex-col w-full " onSubmit={handlFormSubmit}>
        <label>something Search ?</label>
        <input onChange={handlChange} value={value} className="  outline-none px-3 rounded text-lg bg-gray-400" />
      </form>
    </div>
  );
}
