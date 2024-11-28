import React from "react";


const NamesList = ({ TName, Tdate, Ttime, deletehandle }) => {
    return (
        <>
            <ul>
                <li className='task' id={TName}><span className="tasknamespan">{TName}</span><span className="taskdatespan">{Tdate} at {Ttime}</span>
                <button onClick={()=> deletehandle(TName)} >Delete</button></li>
            </ul>

        </>
    )
}
export default NamesList;