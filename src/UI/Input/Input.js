import React from "react";
import classes from './Input.module.scss';

const input = props => {
    // console.log(props.valueOf());
    // let errorStyles = null;
    // if (props["maikamu"] === 'stara') {
    //     errorStyles = {backgroundColor: 'red'};       
    // }

    switch (props.type) {
        case "text":
            return (<input
                className={classes.Input}
                {...props}
                style={props.style} />);

        case "select":
            return (<select
                className={classes.InputSelect}
                {...props}
                style={props.style}>
                {props.options.map(option => (
                    <option value={option.value}>{option.title}</option>
                ))}
            </select>);
        default: ;
    }

    return (<input
        className={classes.Input}
        {...props}
        style={props.style} />)
}

export default input;