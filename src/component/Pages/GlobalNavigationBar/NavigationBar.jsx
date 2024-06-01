import styles from "./NavigationBar.module.css";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import icon from "../../../assets/symbol-defs.svg";

const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: white;
  }
  &.active::after {
    scale: 1;
  }
`;

function NavigationBar() {
  return (
    <>
      <nav className={styles.nav_box}>
        <StyledLink to="/" className={styles.nav_link}>
          Home
        </StyledLink>
        <StyledLink to="/todolist" className={styles.nav_link}>
          ToDoList
        </StyledLink>
        <StyledLink to="/loginform" className={styles.nav_link}>
          LoginForm
        </StyledLink>
      </nav>
    </>
  );
}

export default NavigationBar;
