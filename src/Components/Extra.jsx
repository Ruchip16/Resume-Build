import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import { Form, Button } from 'semantic-ui-react';

class Extra extends Component {

    state = {
        step: 6
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
        const { values , handleChange } = this.props;
        return(
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Experience Details" ></AppBar>
                    <TextField
                        hintText="Experience 1"
                        floatingLabelText = "Experience 1"
                        onChange={handleChange('text')}
                        defaultValue={values.text}   
                    />
                    <br/>
                    <TextField
                        hintText="Institute / Organization"
                        floatingLabelText = "Institute / Organization"
                        onChange={handleChange('organization')}
                        defaultValue={values.organization}   
                    />
                    <br/>
                    <TextField
                        hintText="Position"
                        floatingLabelText = "Position"
                        onChange={handleChange('position')}
                        defaultValue={values.position}   
                    />
                    <br/>
                    <TextField
                        hintText="Duration"
                        floatingLabelText = "Duration"
                        onChange={handleChange('duration')}
                        defaultValue={values.duration}   
                    />
                    <br/>
                    <TextField
                        hintText="Description"
                        floatingLabelText = "Description"
                        onChange={handleChange('text')}
                        defaultValue={values.text}   
                    />
                    <br/>
                    <TextField
                        hintText="Experience 2"
                        floatingLabelText = "Experience 2"
                        onChange={handleChange('text')}
                        defaultValue={values.text}   
                    />
                    <br/>
                    <TextField
                        hintText="Institute / Organization"
                        floatingLabelText = "Institute / Organization"
                        onChange={handleChange('organization')}
                        defaultValue={values.organization}   
                    />
                    <br/>
                    <TextField
                        hintText="Position"
                        floatingLabelText = "Position"
                        onChange={handleChange('position')}
                        defaultValue={values.position}   
                    />
                    <br/>
                    <TextField
                        hintText="Duration"
                        floatingLabelText = "Duration"
                        onChange={handleChange('duration')}
                        defaultValue={values.duration}   
                    />
                    <br/>
                    <TextField
                        hintText="Description"
                        floatingLabelText = "Description"
                        onChange={handleChange('text')}
                        defaultValue={values.text}   
                    />
                    <br/>
                    <RaisedButton
                        label="Continue"
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
                    <RaisedButton
                        label="Next"
                        primary={true}
                        style={styles.button}   
                        onClick={this.next}
                    /> 
                </React.Fragment>
            </MuiThemeProvider>
        );
    }
}
const styles = {
    button: {
        margin : 15
    }
}

export default Extra;