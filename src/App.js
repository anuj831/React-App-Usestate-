import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {

  // const tasks = React.useState(["Task1","Task2"])
  const [tasks,setTasks] = React.useState([])
  console.log(tasks)
  // const stateVar = React.useState(2)
  // console.log("State var"+ stateVar) //2, function () { [native code] }
  const taskElements = tasks.map(task => <p>{task}</p>)

  function addTask(){
    const newTask = `Task ${tasks.length+1}`
    setTasks(prevState => [...prevState,newTask])
  }

  return (
    <div>
      <button onClick={addTask}>Add Task</button>
      {taskElements}
    </div>
  );
}

export default App;