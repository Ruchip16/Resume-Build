import React from 'react';
import $ from 'jquery';

export default class Resume extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      step: 1,
      firstname: '',
      lastname: '',
      email: '',
      phone: '',
      github: '',
      linkedin: '',
      facebook: '',
      instagram: ''
   }
  }

  componentDidMount() {
    this.fetch();
  }

  fetch() {
    var context = this;

    $.ajax({
      url: 'http://localhost:3000',
      method: 'GET',
      success: function(response) {
        context.setState({
          firstName: response.firstName,
          lastName: response.lastName
        });
      }
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.firstName} {this.state.LastName}</h1>
      </div>
    );
  }
}