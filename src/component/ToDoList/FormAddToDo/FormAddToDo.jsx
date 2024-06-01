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
      <label className={styles.label_todo_form}>What do you want to do?</label>
      <input
      className={styles.input_todo_form}
        type="text"
        value={taskText}
        onChange={handleInputChange}
        placeholder="Enter task..."
      />
      <button className=""onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default FormAddToDo;
