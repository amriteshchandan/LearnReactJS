import * as React from "react";
import Persons from "../components/Persons/Persons.js";
import Cockpit from "../components/Cockpit/Cockpit.js";
import styles from "./App.module.css";
import withClass from "../hoc/WithClass/withClass.js";

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
    showPersons: false,
    showCockpit: true,
    changeCounter: 0,
    authenticated: false
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

    // setState is async call and does not gaurantee that this.changeCounter will always give
    // updated value.

    // this.setState({
    //   persons: persons,
    //   changeCounter: this.state.changeCounter + 1
    // });

    // React gaurantees that prevState will be consistent.
    // Hence, this was of updating state is good practive if new state depends upon prev state
    this.setState((prevState, props) => {
      return {
        persons: persons,
        changeCounter: prevState.changeCounter + 1
      };
    });
  };

  deletePerson = index => {
    console.log("deletePerson called");
    let persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({ persons });
  };

  loginHandler = () => {
    console.log("+++++++++++++++++++++++++ loginHandler");
    this.setState({ authenticated: true });
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
            isAuthenticated={this.state.authenticated}
          />
        </div>
      );
      buttonClasses.push(styles.Red);
    }

    return (
      <div className={styles.App}>
        <button
          onClick={() => {
            this.setState({ showCockpit: false });
          }}
        >
          Remove Cockpit
        </button>
        {this.state.showCockpit ? (
          <Cockpit
            appTitle={this.props.appTitle}
            showPersons={this.state.showPersons}
            personsLength={this.state.persons.length}
            clicked={this.togglePersonsHandler}
            login={this.loginHandler}
          />
        ) : null}
        {persons}
      </div>
    );
  }
  // return React.createElement("div", {className: "App" }, React.createElement("h1", null, "Hello World!")
}

export default withClass(App, styles.App);

// In arrow function parameter matches the argumant list. For ex - If event is passed as second arg, it will accessed as second
// parameter and so on. Same goes with other args too.
// Here we need to pass event explicitly.

// If we use bind , we don't need to pass event explicitly, it will be available as last parameter to recieving function.
