import React, { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Prompt from "./components/Prompt";
import Todo from "./components/Todo";

export default function App() {
  const [todoArr, setTodoArr] = useState([]);
  const [task, setTask] = useState({});
  const [isTask, setIsTask] = useState(false);

  const todoData = todoArr.map((todo) => (
    <Todo
      key={todo.id}
      item={todo}
      edit={() => handleEdit(todo.id)}
      delete={() => handleDelete(todo.id)}
      done={() => handleDone(todo.id)}
    />
  ));

  //handleClick to add a task
  const handleClick = () => {
    setIsTask(true);
  };

  //handleCancel for the prompt's cancel button
  const handleCancel = () => {
    setIsTask(false);
  };

  //handleDelete to delete a task
  const handleDelete = (id) => {
    setTodoArr((prevList) => {
      return prevList.filter((todo) => todo.id !== id);
    });
  };

  //handleDone to mark as completed
  const handleDone = (id) => {
    setTodoArr((prevList) => {
      return prevList.map((todo) => {
        return todo.id === id ? { ...todo, completed: !todo.completed } : todo;
      });
    });
  };

  //handleEdit to edit task
  const handleEdit = (id) => {
    handleClick();
    console.log(id);
  };
  //handleChange for the prompt's input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({
      id: todoArr.length + 1,
      [name]: value,
      completed: false,
    });
  };

  //handleOk for the prompt's Ok button
  const handleOK = (e) => {
    e.preventDefault();
    if (!!task?.taskInput) {
      setTodoArr((prevList) => {
        return [...prevList, task];
      });
    }
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
          value={task.taskInput}
        />
      )}
      <Footer onClick={handleClick} />
    </div>
  );
}
