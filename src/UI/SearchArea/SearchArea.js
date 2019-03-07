import React from 'react';
import classes from '../SearchArea/SearchArea.modules.scss';
import Input from '../Input/Input.js';
import Button from '../Button/Button.js'; 


const SearchArea = (props) => {
    
    return (
        <div className='search-area'>

            <form id='myForm' onSubmit={props.searchBook} action=''>
                <Input onChange={props.handleSearch} type='text' placeholder="Serch book"></Input>
                <Button type='submit' title="Search"></Button>
            </form>
        </div>
    )
}

export default SearchArea;