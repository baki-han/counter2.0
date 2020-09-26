import React from "react";

function Controller(props) {
    return (
        <div>
            <input type="text" placeholder="no trabajo"/>
            <button onClick={props.addCounter}>Add Counter</button>
        </div>
    );
}

export default Controller;
