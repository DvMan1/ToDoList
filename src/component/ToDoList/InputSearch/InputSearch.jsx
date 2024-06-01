import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilterText } from "../../../redux/ToDoSlice";
import styles from "./InputSearch.module.css";

const Filter = () => {
  const dispatch = useDispatch();
  const filterText = useSelector((state) => state.filterText);

  const onChange = (event) => {
    dispatch(setFilterText(event.target.value));
  };

  return (
    <div className={styles.input_conteiner}>
      <input
        type="text"
        placeholder=""
        value={filterText}
        onChange={onChange}
        className={styles.input_filter}
        id="filter"
      />
      <label className={styles.search_task_label} htmlFor="filter">
        Search task
      </label>
    </div>
  );
};

export default Filter;
