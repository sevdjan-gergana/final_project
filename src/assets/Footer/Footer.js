import React from 'react'; 
import classes from './Footer.module.scss';

class FooterComponent extends React.Component {
    render(){
        return(
            <footer className={classes.Footer}>
            <div className={classes.Column}>
            <h3>About us</h3>
            <h3>Careers</h3>
           
            
            <h3>Terms</h3>
            <h3>Privacy</h3>
           
            <h3>Authors</h3>
            <h3>Advertise</h3>
          
            <h3>Authors & ads blog</h3>
           
            <h3>API</h3>
            
            </div>


           <div className={classes.rights}>
            <p>© 2019 Goodreads, Inc.</p>
            </div>
         
            
            
            </footer>
        )
    }


}
 
export default FooterComponent;