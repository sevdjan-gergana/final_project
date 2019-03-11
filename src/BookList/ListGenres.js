import React from 'react';
// import request from 'superagent';
import List from '../List/List';

const ListGenres = (props) => {
    return (
        <div key={props.genre}>
            <hr/>
            <h3>{props.genre}</h3>
            <List books={props.books} />
        </div>
    )
}

export default ListGenres;