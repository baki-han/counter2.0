import React, {useState} from "react";

function Controller(props) {

    const [value, setValue] = useState("");

    const buttonHandler = () =>{
        props.addCounter(value);
        setValue("");
    }


    return (
        <div>
            <input onChange={(e)=> setValue(e.target.value)}
                   type="number" placeholder="enter new counter" value={value}/>
            <button onClick={buttonHandler}>Add Counter</button>
        </div>
    );
}

export default Controller;
