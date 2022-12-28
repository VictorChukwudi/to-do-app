import React from "react";
import deleteIcon from "../images/trash.png";
import pencilIcon from "../images/pencil.png";
import checkedIcon from "../images/checked.png";

export default function Todo(props) {
  let styles;
  if (props.item.completed) {
    styles = {
      color: "#808080",
      textDecoration: "line-through",
    };
  }

  return (
    <div className="todo">
      <p className="todo--item" style={styles}>
        {props.item.taskInput}
      </p>
      <span className="todo--icons">
        <img src={pencilIcon} alt="" onClick={props.click} />
        <img src={checkedIcon} alt="" onClick={props.done} />
        <img src={deleteIcon} alt="" onClick={props.delete} />
      </span>
    </div>
  );
}
