import React from "react";

export default function Todo(props) {
  return (
    <div className="todo">
      <span className="todo--details">
        {/* <small className="todo--time">{props.item.timeInput}</small> */}
        <p className="todo--item">{props.item.taskInput}</p>
      </span>
      {/* <hr /> */}
    </div>
  );
}
