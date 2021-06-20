import React, { Component } from 'react';
// import { MuiThemeProvider } from '@material-ui/core/styles';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton'; 
import AppBar from 'material-ui/AppBar';
import { Form, Button } from 'semantic-ui-react';

class Personal extends Component{
    state = {
        step: 2
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
                    <AppBar title="Enter Personal Details" ></AppBar>
                    <TextField
                        hintText="Enter Your First Name"
                        floatingLabelText = "First Name"
                        onChange={handleChange('FirstName')}
                        defaultValue={values.firstName}   
                    />
                  
                    <TextField
                        hintText="Enter Your Last Name"
                        floatingLabelText = "Last Name"
                        onChange={handleChange('lastName')}
                        defaultValue={values.lastName}   
                    />
                    
                    <TextField
                        hintText="Enter Your Email"
                        floatingLabelText = "Email ID"
                        onChange={handleChange('email')}
                        defaultValue={values.email}   
                    />
                    <br/>
                    <TextField
                        hintText="Phone Number"
                        floatingLabelText = "Phone Number"
                        onChange={handleChange('phone')}
                        defaultValue={values.phone}   
                    />
                    <br/>
                    <TextField
                        hintText="Your Website"
                        floatingLabelText = "Website"
                        onChange={handleChange('website')}
                        defaultValue={values.website}   
                    />
                    <br/>
                    <TextField
                        hintText="Github"
                        floatingLabelText = "Github"
                        onChange={handleChange('github')}
                        defaultValue={values.github}   
                    />
                    <br/>
                    <TextField
                        hintText="LinkedIn"
                        floatingLabelText = "LinkedIn"
                        onChange={handleChange('linkedin')}
                        defaultValue={values.linkedin}   
                    />
                    <br/>
                    <TextField
                        hintText="Twitter"
                        floatingLabelText = "Twitter"
                        onChange={handleChange('twitter')}
                        defaultValue={values.twitter}   
                    />
                    <br/>
                    <TextField
                        hintText="Facebook"
                        floatingLabelText = "Facebook"
                        onChange={handleChange('facebook')}
                        defaultValue={values.facebook}   
                    />
                    <br/>
                    <TextField
                        hintText="Instagram"
                        floatingLabelText = "Instagram"
                        onChange={handleChange('instagram')}
                        defaultValue={values.instagram}   
                    />
                    <br/>
                    <RaisedButton
                        label="Continue"
                        primary={true}
                        style={styles.button} 
                        onClick={this.continue}  
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
export default Personal;

// <Form >
            //     <h1 className="ui centered">Personal Details</h1>
            //     <Form.Field>
            //         <label>First Name</label>
            //         <input
            //         placeholder='First Name'
            //         onChange={this.props.handleChange('firstName')}
            //         defaultValue={values.firstName}
            //         />
            //     </Form.Field>
            //     <Form.Field>
            //         <label>Last Name</label>
            //         <input
            //         placeholder='Last Name'
            //         onChange={this.props.handleChange('lastName')}
            //         defaultValue={values.lastName}
            //         />
            //     </Form.Field>
            //     <Form.Field>
            //         <label>Email Address</label>
            //         <input
            //         type='email'
            //         placeholder='Email Address'
            //         onChange={this.props.handleChange('email')}
            //         defaultValue={values.email}
            //         />
            //     </Form.Field>
            //     <Form.Field>
            //         <label>Phone Number</label>
            //         <input
            //         type='tel'
            //         placeholder='Phone Number'
            //         onChange={this.props.handleChange('phone')}
            //         defaultValue={values.phone}
            //         />
            //     </Form.Field>
            //     <Form.Field>
            //         <label>Your Website</label>
            //         <input
            //         type='website'
            //         placeholder='Your Website'
            //         onChange={this.props.handleChange('website')}
            //         defaultValue={values.website}
            //         />
            //     </Form.Field>
            //     <Form.Field>
            //         <label>Github</label>
            //         <input
            //         type='github'
            //         placeholder='Github'
            //         onChange={this.props.handleChange('github')}
            //         defaultValue={values.github}
            //         />
            //     </Form.Field>
            //     <Form.Field>
            //         <label>LinkedIn</label>
            //         <input
            //         type='linkedin'
            //         placeholder='LinkedIn'
            //         onChange={this.props.handleChange('linkedin')}
            //         defaultValue={values.linkedin}
            //         />
            //     </Form.Field>
            //     <Form.Field>
            //         <label>Twitter</label>
            //         <input
            //         type='twitter'
            //         placeholder='Twitter'
            //         onChange={this.props.handleChange('twitter')}
            //         defaultValue={values.twitter}
            //         />
            //     </Form.Field>
            //     <Form.Field>
            //         <label>Facebook</label>
            //         <input
            //         type='facebook'
            //         placeholder='Facebook'
            //         onChange={this.props.handleChange('facebook')}
            //         defaultValue={values.facebook}
            //         />
            //     </Form.Field>
            //     <Form.Field>
            //         <label>Instagram</label>
            //         <input
            //         type='instagram'
            //         placeholder='Instagram'
            //         onChange={this.props.handleChange('instagram')}
            //         defaultValue={values.instagram}
            //         />
            //     </Form.Field>
            //     <Button onClick={this.back}>Back</Button>
            //     <Button onClick={this.next}>Next</Button>
            // </Form>