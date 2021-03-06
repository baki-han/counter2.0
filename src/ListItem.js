import React, { useState } from 'react';

function ListItem(props){

    const [editMode, setEditMode] = useState(false);
    const [value, setValue] = useState("");

    const changeEditMode = () =>{
        setEditMode(!editMode);
    }

    const buttonSaveHandler = ()=>{
        props.saveCounter(props.el.id, value);
        setValue("");
        setEditMode(!editMode);
    }

    return (<div>
        <button onClick={()=> props.update(props.el.id, -1)}>-</button>
        <button onClick={()=> props.update(props.el.id, 1)} >+</button>
        {props.el.counter}

        {/* {props.i !== 0 && <button onClick={() => props.moveCounter(props.index, props.i - 1)}>↑</button> }
     {props.i !== props.len-1 && <button onClick={() => props.moveCounter(props.index, props.i + 1)}>↓</button>} */}

        <button disabled={props.i === 0} onClick={() => props.moveCounter(props.index, props.i - 1)}>↑</button>
        <button disabled={props.i === props.len-1} onClick={() => props.moveCounter(props.index, props.i + 1)}>↓</button>

        {editMode && <>
            <input type="number"
                   onChange={(event => setValue(event.target.value))}
                   value={value}/>
            <button onClick={buttonSaveHandler}>save</button>
            <button onClick={()=>setEditMode(!editMode)}>cancel</button>
        </>}
        {!editMode && <button onClick={changeEditMode}>edit</button>}
    </div>);
}

export default ListItem;