import * as React from "react";
import Persons from "../components/Persons/Persons.js";
import Cockpit from "../components/Cockpit/Cockpit.js";
import styles from "./App.module.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log("[App.js] constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("[App.js] getDerivedStateFromProps", props);
    return state;
  }

  // componentWillUpdate() {
  //   console.log("[App.js] componentWiilUpdate");
  // }

  componentDidMount() {
    console.log("[App.js] componentDidMount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("[App.js] shouldComponentUpdate");
    return true;
  }

  componentDidUpdate() {
    console.log("[App.js] componentDidUpdate");
  }

  state = {
    persons: [
      { id: 1, name: "amritesh", age: 30 },
      { id: 2, name: "chandan", age: 20 },
      { id: 3, name: "aman", age: 35 }
    ],
    showPersons: false
  };

  togglePersonsHandler = () => {
    console.log("togglePersonsHandler called");
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  nameChangeHandler = (event, id) => {
    console.log("nameChangeHandler called");
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = this.state.persons[personIndex];
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons });
  };

  deletePerson = index => {
    console.log("deletePerson called");
    let persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({ persons });
  };

  render() {
    console.log("[App.js] render");
    let buttonClasses = [styles.Button];
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons
            persons={this.state.persons}
            clicked={this.deletePerson}
            changed={this.nameChangeHandler}
          />
        </div>
      );
      buttonClasses.push(styles.Red);
    }

    return (
      <div className={styles.App}>
        <Cockpit
          appTitle={this.props.appTitle}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}
        />
        {persons}
      </div>
    );
  }
  // return React.createElement("div", {className: "App" }, React.createElement("h1", null, "Hello World!")
}

export default App;

// In arrow function parameter matches the argumant list. For ex - If event is passed as second arg, it will accessed as second
// parameter and so on. Same goes with other args too.
// Here we need to pass event explicitly.

// If we use bind , we don't need to pass event explicitly, it will be available as last parameter to recieving function.
