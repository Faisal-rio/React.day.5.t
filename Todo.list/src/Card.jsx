/** @format */

import React from "react";
import "./card.css";

function Card({
  status,
  setStatus,
  taskobj,
  index,
  deleteTask,
  setTaskName,
  setDescription,
  setEdit,
}) {
  // Function to handle delete
  const handleDelete = () => {
    deleteTask(index);
  };

  // Function to save the task
  const handlesave = (e) => {
    console.log(e.target.value);
    let taskList = JSON.parse(localStorage.getItem("tasklist"));
    taskList[index] = { ...taskList[index], status: e.target.value };
    localStorage.setItem("tasklist", JSON.stringify(taskList));
    window.location.reload();
    setStatus(e.target.value);
  };

  return (
    <div className="col">
      <div className="card mt-3 p-3 taskcard">
        <div className="card-text">Name: {taskobj.Name}</div>
        <div className="card-text">Description: {taskobj.Description}</div>
        <div className="m-2">
          <label>Status:</label>
          <select onChange={handlesave} value={taskobj.status}>
            <option className="bg-success" value="Completed">
              Completed
            </option>
            <option className="bg-danger" value="Not-Completed">
              Not-Completed
            </option>
          </select>
        </div>
        <div className="card-group pt-3 d-flex justify-content-end">
          <button
            className="btn btn-success me-2"
            onClick={() => {
              setDescription(taskobj.Description);
              setTaskName(taskobj.Name);
              setEdit(index);
              setStatus(taskobj.status);
            }}
          >
            Edit
          </button>
          <button className="btn btn-danger" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
