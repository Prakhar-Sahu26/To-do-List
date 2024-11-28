import React, { useState } from "react";
function TaskForm({addTaskBtn}){
   
    const [name, setName] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");

    const handleAddTask = () => {
      if (name && date && time) {
        addTaskBtn(name, date, time);
        setName(""); 
        setDate("");
        setTime("");
      } 
      else {
        alert("Please fill all fields before adding a task!");
      }}

      const currentDate = new Date();
      console.log(currentDate)
    
    return(
        <>
        <div className="taskinput">
            <input type="text"  id="inputTaskName" placeholder="Enter Task" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="date" id="inputTaskDate" placeholder="" value={date} onChange={(e) => setDate(e.target.value)}/>
            <input type="time" id="inputTaskTime" placeholder="Enter time" value={time} onChange={(e) => setTime(e.target.value)}/>
            <button type="submit" className="addbtn" onClick={handleAddTask}>ADD</button>
        </div>
        </>
    )
}
export default TaskForm;