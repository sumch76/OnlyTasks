import './App.css';
import InputField from './components/InputField';
import React, { useState } from 'react';


const App:React.FC =()=>
  {
    const[todo,setTodo]=useState<string>("");
  return (
    <div className='App'>
      <span className='heading'>OnlyTasks</span>
      <InputField todo={todo} setTodo={setTodo}/>
    </div>
       );
};

export default App;
