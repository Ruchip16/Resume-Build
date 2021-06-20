import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
// import 'LinkIcon.js';
import './App.css';
import Profile from './Components/Profile';
import { Container } from 'semantic-ui-react';

class App extends Component {

  render() {
    return(
      <div className="App">
        <Profile />

      </div>
    )
  }
}
axios.get('http://localhost:3001/')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
export default App;