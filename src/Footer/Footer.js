import React from 'react';
import classes from './Footer.module.scss';
import Button from '../UI/Button/Button.js';

class FooterComponent extends React.Component {
    render() {
        return (
            <footer className={classes.Footer}>
                <div className={classes.Buttons}>
                    <Button type="button" title="About us"></Button>
                    <Button type="button" title="Careers"></Button>
                    <Button type="button" title="Terms"></Button>
                    <Button type="button" title="Privacy"></Button>
                    <Button type="button" title="Authors"></Button>
                    <Button type="button" title="Advertise"></Button>
                    <Button type="button" title="Ads blog"></Button>
                    <Button type="button" title="API"></Button>
                </div>
                <div className={classes.Rights}>
                    <p>© 2019 Gergana and Sevdjan</p>
                </div>
            </footer>
        )
    }


}

export default FooterComponent;