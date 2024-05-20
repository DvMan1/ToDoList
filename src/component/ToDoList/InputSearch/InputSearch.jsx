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
        placeholder="Фильтр"
        value={filterText}
        onChange={onChange}
      />
    </div>
  );
};

export default Filter;
