import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

class Success extends Component {

    state = {
        step: 8
    }

    handleChange = input => e => {
        this.setState({ [input] : e.target.value })
    };
    
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    // next = e => {
    //     e.preventDefault();
    //     this.props.nextStep();
    // };
    // nextStep = () => {
    //     const { step } = this.state
    //     this.setState({
    //         step : step + 1
    //     })
    // };

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
        return(
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Success"></AppBar>
                    <h1>Thank You for Your Successfull Submission !! </h1>
                    <p>You will get an email for further details.</p>
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}
export default Success;