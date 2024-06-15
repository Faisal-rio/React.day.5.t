/** @format */

import React from "react";
//import "./card.css";

function Createtask({
  status,
  save,
  taskName,
  setTaskName,
  description,
  setDescription,
}) {
  // Function to handle changes to the task name and description
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "taskname") {
      setTaskName(value);
    } else {
      setDescription(value);
    }
  };

  // Function to save the task
  const handlesave = () => {
    let taskObj = {};
    taskObj["Name"] = taskName;
    taskObj["Description"] = description;
    taskObj["status"] = status;
    save(taskObj);
  };

  return (
    <form className="form-container">
      <h2>Create Task</h2>
      <div className="input-container">
        <input
          type="text"
          name="taskname"
          id="input"
          className="form-control"
          onChange={handleChange}
          value={taskName}
          placeholder="Task Name"
        />
      </div>
      <div className="input-container">
        <input
          name="description"
          id="text-area"
          className="form-control"
          onChange={handleChange}
          value={description}
          placeholder="Description"
        />
      </div>
      <button
        id="button"
        type="button"
        className="btn btn-success"
        onClick={handlesave}
      >
        Add
      </button>
    </form>
  );
}

export default Createtask;
