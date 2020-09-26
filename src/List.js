import React from 'react';
import ListItem from './ListItem';

function List(props){
    const saveCounter = props.saveCounter;

    return (<div>

        {props.list.map((el, i) => <ListItem
            el={el} key={el.id} index={i}
            moveCounter={props.moveCounter}
            i={i} len={props.list.length}
            update={props.counterChange}
            saveCounter={saveCounter}
        />)}

    </div>);
}

export default List;