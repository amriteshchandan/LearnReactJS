import * as React from "react";
import Person from "./Person/Person.js";
import styles from "./App.module.css";
import ErrorBoundry from "./ErrorBoundry/ErrorBoundry.js";

class App extends React.Component {
  state = {
    persons: [
      { id: 1, name: "amritesh", age: 30 },
      { id: 2, name: "chandan", age: 20 },
      { id: 3, name: "aman", age: 35 }
    ],
    showPersons: false
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  nameChangeHandler = (event, id) => {
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
    let persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({ persons });
  };

  render() {
    let buttonClasses = [styles.Button];
    console.log(buttonClasses);
    let persons = null;
    if (this.state.showPersons) {
      persons = this.state.persons.map((person, index) => {
        return (
          <ErrorBoundry key={person.id}>
            <Person
              name={person.name}
              age={person.age}
              changed={event => this.nameChangeHandler(event, person.id)}
              click={() => this.deletePerson(index)}
            ></Person>
          </ErrorBoundry>
        );
      });
      buttonClasses.push(styles.Red);
    }

    const assignedClasses = [];

    if (this.state.persons.length <= 2) {
      assignedClasses.push(styles.red);
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(styles.bold);
    }

    return (
      <div className={styles.App}>
        <h1>I'm ReactJS App</h1>
        <p className={assignedClasses.join(" ")}>This is really working!!</p>
        <button
          className={buttonClasses.join(" ")}
          alt={this.state.showPersons}
          onClick={this.togglePersonsHandler}
        >
          Toggle Persons
        </button>
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

// If we use bind , we don't need to pass event explicitly, it will be available as last parameter to recieving function

// Edit
