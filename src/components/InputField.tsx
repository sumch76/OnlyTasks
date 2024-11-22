import React from 'react'
import "./style.css"
const InputField = () => {
  return (
    <div>
   <form className='input'>
    <input  className="input_box" type='text' placeholder='enter your task' ></input>
    <button className='input_submit' type="submit">Add only</button>
   </form>
    </div>
  )
}

export default InputField
