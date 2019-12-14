import React from "react";
import styles from "./Cockpit.module.css";

const Cockpit = props => {
  const assignedClasses = [];
  let buttonClasses = [styles.Button];
  if (props.showPersons) {
    buttonClasses.push(styles.Red);
  }

  if (props.persons.length <= 2) {
    assignedClasses.push(styles.red);
  }
  if (props.persons.length <= 1) {
    assignedClasses.push(styles.bold);
  }

  return (
    <div className={styles.Cockpit}>
      <h1>{props.appTitle}</h1>
      <p className={assignedClasses.join(" ")}>This is really working!!</p>
      <button className={buttonClasses.join(" ")} onClick={props.clicked}>
        Toggle Persons
      </button>
    </div>
  );
};

export default Cockpit;
