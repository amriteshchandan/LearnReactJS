import * as React from "react";
import "./App.css";
import Person from "./Person/Person.js";

class App extends React.Component {
    state = {
        persons: [
            { name: "amritesh", age: 30 },
            { name: "chandan", age: 20 },
            { name: "aman", age: 35 }
        ],
        showPersons: false
    };

    switchNameHandler = newName => {
        console.log(this);
        this.setState({
            persons: [
                { name: newName, age: 50 },
                { name: "chandan", age: 60 },
                { name: "aman", age: 70 }
            ]
        });
    };

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({ showPersons: !doesShow });
    };

    nameChangeHandler = (a, b, c) => {
        console.log(a);
        console.log(b);
        console.log(c);
        // const persons = this.state.persons;
        // persons.forEach(person => {
        //     if (person.name === name) {
        //         console.log("Inside this");
        //         person.name = event.target.value;
        //     }
        // });

        // this.setState({ persons });

        // this.setState({
        //     persons: [
        //         { name: "amritesh", age: 100 },
        //         { name: event.target.value, age: 120 },
        //         { name: "aman", age: 101 }
        //     ]
        // });
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
            persons = this.state.persons.map(person => {
                return (
                    <Person
                        name={person.name}
                        age={person.age}
                        // changed={this.nameChangeHandler.bind(
                        //     this,
                        //     person.name,
                        //     person.age
                        // )}
                        changed={event =>
                            this.nameChangeHandler(
                                person.name,
                                event,
                                person.age
                            )
                        }
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
