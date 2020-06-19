import React from 'react';

export function Message (props) {
    return(
        <h2>Value of Count is: {props.counter}</h2>  // child component Message with counter props
    )
}