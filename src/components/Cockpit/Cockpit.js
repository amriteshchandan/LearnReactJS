import React, { useEffect } from "react";
import styles from "./Cockpit.module.css";

const Cockpit = props => {
  useEffect(() => {
    console.log("[Cockpit.js] useEffect 1");
    const timer = setTimeout(() => {
      alert("Data saved on cloud");
    }, 1000);
    return () => {
      // clearTimeout(timer);
      console.log("[Cockpit.js] cleanup work in 1st useEffect");
    };
  }, []); // if the array passed is empty, useEffect behaves has componentDid mount and will run only once during creation

  useEffect(() => {
    console.log("[Cockpit.js] useEffect 2");
    return () => {
      console.log("[Cockpit.js] cleanup work in 2nd useEffect");
    };
  });

  const assignedClasses = [];
  let buttonClasses = [styles.Button];
  if (props.showPersons) {
    buttonClasses.push(styles.Red);
  }

  if (props.personsLength <= 2) {
    assignedClasses.push(styles.red);
  }
  if (props.personsLength <= 1) {
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

export default React.memo(Cockpit);
