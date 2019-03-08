import React from 'react';
import classes from './Loader.module.scss';
import loader from '../assets/images/loader.gif';


class LoaderComponent extends React.Component {
    
    render() {
        return (
            <div className={classes.Wrapper}>
                <div className={classes.Loader}><img src={loader} alt="loader"/></div>
            </div>
        );
    }
}

export default LoaderComponent;