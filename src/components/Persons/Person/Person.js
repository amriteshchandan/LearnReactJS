import * as React from "react";
import classes from "./Person.module.css";

class Person extends React.Component {
  render() {
    console.log("[Person.js] rendering....");
    return (
      <div className={classes.Person}>
        <p onClick={this.props.click}>
          I am {this.props.name} with age {this.props.age} {this.props.children}
        </p>
        <input
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        ></input>
      </div>
    );
  }
}

export default Person;
