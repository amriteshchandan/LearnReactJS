import * as React from "react";
import "./App.css";
import Person from "./Person/Person.js";

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
        const style = {
            backgroundColor: "white",
            font: "inherit",
            border: "1px solid blue",
            padding: "8px",
            cursor: "pointer"
        };

        let persons = null;

        if (this.state.showPersons) {
            persons = this.state.persons.map((person, index) => {
                return (
                    <Person
                        key={person.id}
                        name={person.name}
                        age={person.age}
                        changed={event =>
                            this.nameChangeHandler(event, person.id)
                        }
                        click={() => this.deletePerson(index)}
                    />
                );
            });
        }

        return (
            <div className="App">
                <h1>Hello World!</h1>
                <h1>Hello!</h1>
                <button style={style} onClick={this.togglePersonsHandler}>
                    Toggle Perons
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
