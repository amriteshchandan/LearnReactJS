import * as React from "react";
import classes from "./Person.module.css";

const person = props => {
  const randomNumber = Math.random();
  if (randomNumber > 0.7) {
    throw new Error("Something went wrong!");
  }
  return (
    <div className={classes.Person}>
      <p onClick={props.click}>
        I am {props.name} with age {props.age} {props.children}
      </p>
      <input type="text" onChange={props.changed} value={props.name}></input>
    </div>
  );
};

export default person;
