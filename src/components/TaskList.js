import React from 'react';
import TaskForm from './TaskForm';
import '../styles/TaskList.css'

const TaskList = () => {
    return (
        <>
          <TaskForm />
          <div className='task-list-container'>
            TASK LIST
          </div>
        </>
    );
}

export default TaskList;