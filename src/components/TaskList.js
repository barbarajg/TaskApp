import React, { useState } from 'react';
import TaskForm from './TaskForm';
import Task from './Task';
import '../styles/TaskList.css'

const TaskList = () => {

  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    if(task.text.trim()) {
      task.text = task.text.trim();
      const updatedTasks = [task, ...tasks];
      setTasks(updatedTasks);
    }
  }

    return (
        <>
          <TaskForm onSubmit={addTask} />
          <div className='task-list-container'>
            {
              tasks.map((task, index) => 
                <Task
                  key={task.id}
                  id={task.id}
                  text={task.text}
                  completed={task.completed}
                />
              )
            }
          </div>
        </>
    );
}

export default TaskList;