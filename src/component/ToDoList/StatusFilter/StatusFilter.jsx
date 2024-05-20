import React from "react";
import { useDispatch } from "react-redux";
import { setStatusFilter } from "../../../redux/filtersSlice";
import {statusFilters} from "../../../redux/constants"
import styles from "./StatusFilter.module.css";
const {all,active,completed} = statusFilters;

const StatusFilter=()=>{
    const dispatch = useDispatch()
    const handleFilterChange = (filterStatus) => {
        dispatch(setStatusFilter(filterStatus));
      };
      
    return (
        <div className={styles.status_filter_conteiner}>
          <button onClick={() => handleFilterChange(all)}>All</button>
          <button onClick={() => handleFilterChange(completed)}>Completed</button>
          <button onClick={() => handleFilterChange(active)}>Active</button>
        </div>
      );
}
export default StatusFilter