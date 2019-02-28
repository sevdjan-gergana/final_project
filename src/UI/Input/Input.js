import React from "react";
import classes from './Input.module.css';

const input = props => {
    // console.log(props);
    // let errorStyles = null;
    // if (props["maikamu"] === 'stara') {
    //     errorStyles = {backgroundColor: 'red'};       
    // }

    switch (props.type) {
        case "input" : 
        return (<input 
            className={classes.Input} 
            {...props}
            style={props.style} />)

        case "select" :
            return (<select 
                        className={classes.Input} 
                         {...props}
                        style={props.style}>
                    {props.options.map(option => (
                        <option value={option.value}>{option.title}</option>
                    ))}
                </select>)
    }

    return (<input 
        className={classes.Input} 
        {...props}
        style={props.style} />)
}

export default input;