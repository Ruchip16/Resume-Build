import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {List, ListItem} from 'material-ui/List';
// import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import { Form, Button } from 'semantic-ui-react';

class Confirm extends Component {
    state = {
        step: 7
    }

    handleChange = input => e => {
        this.setState({ [input] : e.target.value })
    };
    
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    next = e => {
        e.preventDefault();
        this.props.nextStep();
    };
    nextStep = () => {
        const { step } = this.state
        this.setState({
            step : step + 1
        })
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };
    
    prevStep = () => {
        const { step } = this.state
        this.setState({
            step : step - 1
        })
    };

    render(){
        const { values: { firstName, lastName, email, phoneNumber, 
        yourWebsite, github, linkedin,twitter,facebook,instagram } }  = this.props;
        return(
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Confirm Data"></AppBar>
                    <List>
                        <ListItem
                            primaryText = "First Name"
                            secondaryText = { firstName }   
                        />
                        <ListItem
                            primaryText = "Last Name"
                            secondaryText = { lastName }   
                        />
                        <ListItem
                            primaryText = "Email"
                            secondaryText = { email }   
                        />
                        <ListItem
                            primaryText = "Phone Number"
                            secondaryText = { phoneNumber }   
                        />
                        <ListItem
                            primaryText = "Your Website"
                            secondaryText = { yourWebsite }   
                        />
                        <ListItem
                            primaryText = "Github"
                            secondaryText = { github }   
                        />
                        <ListItem
                            primaryText = "LinkedIn"
                            secondaryText = { linkedin }   
                        />
                        <ListItem
                            primaryText = "Twitter"
                            secondaryText = { twitter }   
                        />
                        <ListItem
                            primaryText = "Facebook"
                            secondaryText = { facebook }   
                        />
                        <ListItem
                            primaryText = "Instagram"
                            secondaryText = { instagram }   
                        />
                    </List>
                    <br/>
                    <RaisedButton
                        label="Confirm & Continue"
                        primary={true}
                        style={styles.button} 
                        onClick={this.continue}  
                    />
                    <RaisedButton
                        label="Back"
                        primary={false}
                        style={styles.button}
                        onClick={this.back}  
                    />
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}
const styles = {
    button: {
        margin : 15
    }
}
export default Confirm;