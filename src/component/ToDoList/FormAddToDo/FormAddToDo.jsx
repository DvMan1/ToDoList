import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../../redux/ToDoSlice";
import styles from "./FormAddToDo.module.css";

const FormAddToDo = () => {
  const dispatch = useDispatch();
  const [taskText, setTaskText] = useState("");

  const handleInputChange = (event) => {
    setTaskText(event.target.value);
  };

  const handleAddTask = () => {
    if (taskText.trim() !== "") {
      dispatch(addTask(taskText));
      setTaskText("");
    }
  };

  return (
    <div className={styles.add_form_conteiner}>
      <input
        type="text"
        value={taskText}
        onChange={handleInputChange}
        placeholder="Enter task..."
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default FormAddToDo;
