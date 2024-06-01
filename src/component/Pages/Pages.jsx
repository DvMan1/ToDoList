import Home from "../Home";
import ToDoList from "../ToDoList/ToDoList";
import { Routes, Route } from "react-router-dom";
import LoginForm from "../LoginForm/LoginForm";

import User from "../LoginForm/User";
import NavigationBar from "../Pages/GlobalNavigationBar/NavigationBar"
import css from "./pages.module.css";

const Pages = () => {
  
  return (
    <>
      <NavigationBar />
      
      <div className={css.page_box}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todolist" element={<ToDoList />} />
          <Route path="/loginform" element={<LoginForm />} />
        </Routes>
       
      </div>
    </>
  );
};

export default Pages;
