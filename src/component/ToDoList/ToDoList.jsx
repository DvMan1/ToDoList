import FormAddToDo from"./FormAddToDo/FormAddToDo"
import Filter from "./InputSearch/InputSearch";
import StatusFilter from "./StatusFilter/StatusFilter";
import CreateTodo from "./CreateToDo/CreateTodo";
import styles from "./ToDoList.module.css"

function ToDoList() {
    return (
      <div className={styles.Root_box}>
        <FormAddToDo></FormAddToDo>
        <Filter></Filter>
        <StatusFilter></StatusFilter>
        <CreateTodo></CreateTodo>
      </div>
    );
  }
  
  export default ToDoList;