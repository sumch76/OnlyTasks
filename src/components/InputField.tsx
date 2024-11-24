import React from 'react'
import "./style.css"
interface Props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
}
const InputField: React.FC<Props> = ({ todo, setTodo }) => {
    return (
        <div>
            
            <form className='input'>
                <input className="input_box" type='text' placeholder='enter your task' ></input>
                <button className='input_submit' type="submit">Add only</button>
            </form>
        </div>
    )
}

export default InputField
