import React from 'react';
import classes from '../List/BookCard.module.scss';


class AsideComponent extends React.Component {
    
    render() {
        return (
            <div className={classes.Aside}>
                <h3>Deciding what to read next?</h3>
                <p>You’re in the right place.Tell us what titles or genres you’ve enjoyed in the past, and we’ll give you surprisingly insightful recommendations.
                </p>
            </div>

        );
    }
}

export default AsideComponent;