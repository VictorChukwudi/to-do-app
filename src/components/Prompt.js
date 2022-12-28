import React from "react";
const Prompt = (props) => {
  return (
    <div className="prompt">
      <span className="prompt--details">
        <label htmlFor="taskInput">
          <small>Task</small>
        </label>
        <br />
        <input
          type="text"
          name="taskInput"
          className="taskInput"
          onChange={props.onChange}
          value={props.value}
        />
        <br />
        <button onClick={props.onCancel}>cancel</button>
        <button onClick={props.onOk}>ok</button>
      </span>
    </div>
  );
};

export default Prompt;
