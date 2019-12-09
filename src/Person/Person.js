import * as React from "react";
import "./Person.css";

const person = props => {
    // console.log("props ", props);
    return (
        <div className="Person">
            <p onClick={props.click}>
                I am {props.name} with age {props.age} {props.children}
            </p>
            <input
                type="text"
                onChange={props.changed}
                value={props.name}
            ></input>
        </div>
    );
};

export default person;
