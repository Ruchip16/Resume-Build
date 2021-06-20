import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import { Form, Button } from 'semantic-ui-react';

class Education extends Component {
    state = {
        step: 3
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
                    <AppBar title="Education Details" ></AppBar>
                    <TextField
                        hintText="College / University"
                        floatingLabelText = "College / University"
                        onChange={handleChange('text')}
                        defaultValue={values.text}   
                    />
                    <br/>
                    <TextField
                        hintText="From Year"
                        floatingLabelText = "From Year"
                        onChange={handleChange('date')}
                        defaultValue={values.date}   
                    />
                    <br/>
                    <TextField
                        hintText="To Year"
                        floatingLabelText = "To Year"
                        onChange={handleChange('date')}
                        defaultValue={values.date}   
                    />
                    <br/>
                    <TextField
                        hintText="Qualification"
                        floatingLabelText = "Qualification"
                        onChange={handleChange('text')}
                        defaultValue={values.text}   
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
                        hintText="School"
                        floatingLabelText = "School"
                        onChange={handleChange('text')}
                        defaultValue={values.text}   
                    />
                    <br/>
                    <TextField
                        hintText="From Year"
                        floatingLabelText = "From Year"
                        onChange={handleChange('date')}
                        defaultValue={values.date}   
                    />
                    <br/>
                    <TextField
                        hintText="To Year"
                        floatingLabelText = "To Year"
                        onChange={handleChange('date')}
                        defaultValue={values.date}   
                    />
                    <br/>
                    <TextField
                        hintText="Qualification"
                        floatingLabelText = "Qualification"
                        onChange={handleChange('text')}
                        defaultValue={values.text}   
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
        )
    }
}
const styles = {
    button: {
        margin : 15
    }
}
export default Education;