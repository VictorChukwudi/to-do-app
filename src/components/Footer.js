import React from "react";
import addIcon from "../images/add.png";
export default function Footer(props) {
  return (
    <div className="footer">
      <div className="footer--design" onClick={props.onClick}>
        <img src={addIcon} alt="add icon" />
        <h4>add new task</h4>
      </div>
    </div>
  );
}
