import React, { Component } from 'react';
import Button from '../UI/Button/Button';
import { withRouter } from "react-router";
// import Header from '../Header/Header.js';

class Home extends Component {

    constructor(props) {
      super(props);
      console.log("[HOME] Constructor");      
    }

  componentDidMount() {
    console.log("[HOME] Component Did Mount")
  }

    
  shouldComponentUpdate(nextProps, nextState) {
    console.log("[HOME] should component update");
    return true;
  }

  componentDidUpdate(prevProps) {
    console.log("[HOME] component did update");
    return true;
  }

    onAddNewAlcohol  = () => {
      this.props.history.push('/newAlcohol');
    }

    deleteAlcohol = id => this.props.deleteAlcohol(id);

    render() {
        console.log("[HOME] render");
        let button =  <Button onClick={this.onAddNewAlcohol} title="+" 
          style={{fontWeight: 'bold', fontSize: '1em', borderRadius: '50%'}} />

        return (
            <React.Fragment>
               
               {/* <Header /> */}

                {/* {this.props.alcohols.length === 0 ? 
                <label>Nqmate poveche!</label> : null }

                <Button onClick={this.props.changeAlcohol} title="Smeni vtoriq" />
                <Button onClick={this.props.sortAlcohols} title="Sortirai" /> */}

            </React.Fragment>
        )
    }
}

export default withRouter(Home);