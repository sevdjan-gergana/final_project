import React from 'react';
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button'; 

{/* <button type='submit' >Change</button>

<input type='text' placeholder="Avatar url"></input>
 */}



const ChangeLogo = (props) => {
    
    return (
        <div className="input-area">
            <form onSubmit={props.importLogo} action=''>
                <Input onChange={props.handleLogo} type='text' placeholder="Import url"></Input>
                <Button type='submit' title="Change"></Button>
            </form>
        </div>
    )
}

export default ChangeLogo;