import React from 'react';
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button'; 


const ChangeLogo = (props) => {
    
    return (
        <div className="input-area">
            <form onSubmit={props.handleLogo} action=''>
                <Input type='text' placeholder="Import url"></Input>
                <Button type='submit' title="Change"></Button>
            </form>
        </div>
    )
}

export default ChangeLogo;