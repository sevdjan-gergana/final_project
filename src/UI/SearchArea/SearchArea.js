import React from 'react';
import classes from '../SearchArea/SearchArea.modules.scss'


const SearchArea = (props) => {
    return (
        <div className='search-area'>
            <form onSubmit={props.searchBook} action=''>
                <input onChange={props.handleSearch} type='text' placeholder="bla"></input>
                <button type='submit'>Search</button>
            </form>
        </div>
    )
}

export default SearchArea;