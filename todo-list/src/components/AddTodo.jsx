import { useState,useRef } from "react"
import { RiAddCircleFill } from "react-icons/ri";
export function AddTodo({handleSetItems}){
  
    const taskName=useRef("")

    const dueDate=useRef("")

    const handleAdd=()=>handleSetItems(taskName.current.value,dueDate.current.value);

    return(
    <div className="row justify-content-center">
        <div className="col-4 ">
          <input className="w-100 p-2" ref={taskName} type="text" placeholder="Enter Task" />
        </div>
        <div className="col-3 ">
          <input type="date" className="w-100 p-2" ref={dueDate} />
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-success max-width p-2" onClick={handleAdd}>
            <RiAddCircleFill />
          </button>
        </div>
    </div>)
}