import React, { useState } from 'react';
import '../styles/TaskForm.css'

const TaskForm = (props) => {

  const [input, setInput] = useState('');

  const handleChange = (e) => {
    setInput(e.target.value); 
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {	
      id: Math.floor(Math.random() * 10000),
      text: input,
      completed: false
    }
    props.onSubmit(newTask);
  };

  return(
    <form 
      className='task-form'
      onSubmit={handleSubmit}>
        <input 
            className='task-input'
            type='text'
            placeholder='Add a task'
            name='text'
            onChange={handleChange}
        />
        <button className='task-button'>
            Add Task
        </button>
    </form>
  );
};

export default TaskForm;