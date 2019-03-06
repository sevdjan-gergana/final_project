import React from 'react';
import classes from './Footer.module.scss';
import Button from '../UI/Button/Button.js';

class FooterComponent extends React.Component {
    render() {
        return (
            <footer className={classes.Footer}>
                <hr />
                <div className={classes.Buttons}>
                    <Button type="button" title="About us"></Button>
                    <Button type="button"  title="Careers"></Button>
                    <Button type="button"  title="Terms"></Button>
                    <Button type="button"  title="Privacy"></Button>
                    <Button type="button"  title="Authors"></Button>
                    <Button type="button"  title="Advertise"></Button>
                    <Button type="button"  title="Authors & ads blog"></Button>
                    <Button type="button"  title="API"></Button>
                </div>
                <p>© 2019 Gergana and Sevdjan</p>
            </footer>
        )
    }


}

export default FooterComponent;