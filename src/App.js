import './App.css';
import logo from './images/header.jpg';
import TaskForm from './components/TaskForm.js'

function App() {
  return (
    <div className="task-app">
      <div className='logo-container'>
      <img
          src={logo}
          className='logo-image'
          alt='Logo' 
      />
      </div>
      <div className='main-task-list-container'>
        <h1>My Tasks</h1>
        <TaskForm />
      </div>
    </div>
  );
}

export default App;
