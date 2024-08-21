import React, { useState } from "react";

const Form = ({ Tasks, setTasks }) => {
    const [task,setTask] = useState("")
    console.log(Tasks);
  return (
    <form className="flex"
    onSubmit={(ev)=>{
        ev.preventDefault();
        setTasks([...Tasks, {task, done: false }]);
    }}>
      <span></span>
      <input type="text" id="add" placeholder="Create new todo ...."  onChange={(e)=> {
        setTask(e.target.value);x
        }}/>
    </form>
  );
};

export default Form;