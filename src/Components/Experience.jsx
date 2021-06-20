import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import { Form, Button } from 'semantic-ui-react';

class Experience extends Component {
    state = {
        step: 5
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
                    <AppBar title="Projects" ></AppBar>
                    <TextField
                        hintText="Project 1"
                        floatingLabelText = "Project 1"
                        onChange={handleChange('text')}
                        defaultValue={values.text}   
                    />
                    <br/>
                    <TextField
                        hintText="Title Of Project"
                        floatingLabelText = "Title"
                        onChange={handleChange('title')}
                        defaultValue={values.title}   
                    />
                    <br/>
                    <TextField
                        hintText="Link Of Project"
                        floatingLabelText = "Link"
                        onChange={handleChange('link')}
                        defaultValue={values.link}   
                    />
                    <br/>
                    <TextField
                        hintText="Description of Project "
                        floatingLabelText = "Description"
                        onChange={handleChange('text')}
                        defaultValue={values.text}   
                    />
                    <br/>
                    <TextField
                        hintText="Project 2"
                        floatingLabelText = "Project 2"
                        onChange={handleChange('text')}
                        defaultValue={values.text}   
                    />
                    <br/>
                    <TextField
                        hintText="Title Of Project 2 "
                        floatingLabelText = "Title"
                        onChange={handleChange('title')}
                        defaultValue={values.title}   
                    />
                    <br/>
                    <TextField
                        hintText="Link Of Project 2"
                        floatingLabelText = "Link"
                        onChange={handleChange('link')}
                        defaultValue={values.link}   
                    />
                    <br/>
                    <TextField
                        hintText="Description of Project 2 "
                        floatingLabelText = "Description"
                        onChange={handleChange('text')}
                        defaultValue={values.text}   
                    />
                    <br/>
                    <TextField
                        hintText="Project 3"
                        floatingLabelText = "Project 3"
                        onChange={handleChange('text')}
                        defaultValue={values.text}   
                    />
                    <br/>
                    <TextField
                        hintText="Title Of Project 3"
                        floatingLabelText = "Title"
                        onChange={handleChange('title')}
                        defaultValue={values.title}   
                    />
                    <br/>
                    <TextField
                        hintText="Link Of Project 3"
                        floatingLabelText = "Link"
                        onChange={handleChange('link')}
                        defaultValue={values.link}   
                    />
                    <br/>
                    <TextField
                        hintText="Description of Project 3 "
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

export default Experience;