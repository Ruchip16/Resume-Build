import React, { Component } from 'react';
import Personal from './Personal';
import Education from './Education';
import Projects from './Projects';
import Experience from './Experience';
import Extra from './Extra';
import Confirm from './Confirm';
import Success from './Success';

class Profile extends Component {
    state = {
        step: 1,
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        yourWebsite: '',
        github: '',
        linkedin: '',
        twitter: '',
        facebook: '',
        instagram: '',
    }

    handleChange = input => e => {
        this.setState({ [input] : e.target.value })
    };

    nextStep = () => {
        const { step } = this.state
        this.setState({
            step : step + 1
        })
    };

    prevStep = () => {
        const { step } = this.state
        this.setState({
            step : step - 1
        })
    };


    render(){
        const {step} = this.state;
        const { firstName, lastName, email, phoneNumber, yourWebsite, github, linkedin
            ,twitter,facebook,instagram } = this.state;
        const values = { firstName, lastName, email, phoneNumber, yourWebsite, github, 
            linkedin,twitter,facebook,instagram };
        switch(step) {
        case 1:
            return (
                <Personal
                    nextStep={this.nextStep}
                    handleChange = {this.handleChange}
                    values={values}
                />
            );
        case 2:
            return (
                <Education
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange = {this.handleChange}
                    values={values}
                />
            );
        case 3:
            return (
                <Projects
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange = {this.handleChange}
                    values={values}
                />
            );
        case 4:
            return (
                <Experience
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange = {this.handleChange}
                    values={values}
                    />
            );
        case 5:
            return (
                <Extra
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange = {this.handleChange}
                    values={values}
                />
            );
        case 6:
            return (
                <Confirm
                    prevStep={this.prevStep}
                    // handleChange = {this.handleChange}
                    values={values}
                />
            );
        case 7:
            return <h1>Success!</h1>
        }
    }
}

export default Profile;