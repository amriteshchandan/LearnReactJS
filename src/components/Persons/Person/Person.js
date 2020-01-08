import * as React from "react";
import classes from "./Person.module.css";
import Aux from "../../../hoc/Auxiliary/Auxiliary.js";
import withClass from "../../../hoc/WithClass/withClass.js";
import PropTypes from "prop-types";

class Person extends React.Component {
  render() {
    console.log("[Person.js] rendering....");
    return (
      // <div className={classes.Person}>
      <Aux>
        <p onClick={this.props.click}>
          I am {this.props.name} with age {this.props.age} {this.props.children}
        </p>
        <input
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        ></input>
      </Aux>
    );
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  children: PropTypes.element,
  changed: PropTypes.func
};

export default withClass(Person, classes.Person);
