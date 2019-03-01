import React from "react";
import classes from './Button.module.scss';

const button = props => 
(<button 
    onClick={props.onClick} 
    className={classes.Button} 
    style={props.style}>
        {props.title}
</button>)

export default button; 