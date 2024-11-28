import React, { useState } from 'react';
import './App.css';
import TaskForm from './form';
import NamesList from './tasks';
//import BubblesBackground from './Bubbles';
import EmptyMsg from './emptymsg';

const App=() =>{
  
  
  const [taskList, setTaskList] = useState([]);
 
  const addTask = (Ta,D,Ti)=>{
    let inputValList=[...taskList,{task:Ta,date:D,time:Ti}];
    setTaskList(inputValList);
  }
  function onDelete(taskName){
    setTaskList(taskList.filter((task) => task.task !== taskName));
  };

  return (
    <center>

     

      <div className="maincontainer">
      <h1>TO-DO-LIST</h1>

      <TaskForm addTaskBtn={addTask}></TaskForm>

      { taskList.length === 0 && <EmptyMsg></EmptyMsg>}

      {taskList.map((fname,index) => (
          <NamesList
            key={index}
            TName = {fname.task} 
            Tdate={fname.date}
            Ttime={fname.time}
            deletehandle={onDelete} 
             ></NamesList>
      ))}
      </div>
    </center> 
  )
}
export default App
