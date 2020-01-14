import * as React from "react";
import classes from "./Person.module.css";
import Aux from "../../../hoc/Auxiliary/Auxiliary.js";
import withClass from "../../../hoc/WithClass/withClass.js";
import PropTypes from "prop-types";

class Person extends React.Component {
  constructor(props) {
    super(props);
    this.inputEle = React.createRef();
  }
  componentDidMount() {
    // this.inputEle.focus(); - use 1
    this.inputEle.current.focus(); // - use -2 modern
  }

  render() {
    console.log("[Person.js] rendering....", this.props);
    return (
      // <div className={classes.Person}>
      <Aux>
        {this.props.isAuth ? <p>Authenticated</p> : <p>Please log in.</p>}
        <p onClick={this.props.click}>
          I am {this.props.name} with age {this.props.age} {this.props.children}
        </p>
        <input
          type="text"
          // use - 1 old
          // ref={inputEle => {
          //   this.inputEle = inputEle;
          // }}

          // use - 2 modern 16.3 onwards
          ref={this.inputEle}
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
