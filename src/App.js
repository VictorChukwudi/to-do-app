import React, { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Prompt from "./components/Prompt";
import Todo from "./components/Todo";
// import data from "./data";

export default function App() {
  const [todoArr, setTodoArr] = useState([]);
  const [task, setTask] = useState({});
  const [isTask, setIsTask] = useState(false);

  const todoData = todoArr.map((todo) => <Todo key={todo.id} item={todo} />);
  const handleClick = () => {
    setIsTask(true);
  };
  const handleCancel = () => {
    setIsTask(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({
      id: todoArr.length + 1,
      [name]: value,
      completed: false,
    });
  };

  const handleOK = (e) => {
    setTodoArr((prevList) => {
      return [...prevList, task];
    });
    setTask({});
    setIsTask(false);
  };
  return (
    <div className="app">
      <Nav />
      {todoData}

      {/* when footer is clicked, isTask is true and the prompt comes up */}
      {/* when isTask is false, the prompt goes away */}

      {isTask && (
        <Prompt
          onCancel={handleCancel}
          onChange={handleChange}
          onOk={handleOK}
        />
      )}
      <Footer onClick={handleClick} />
    </div>
  );
}
