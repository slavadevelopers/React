import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}

function getGreeting(user) {
    if (user) {
        return <h1>Hello, {formatName(user)}!</h1>;
    }
    return <h1>Hello, Stranger.</h1>;
}

const user = {
    firstName: 'Vyacheslav',
    lastName: 'Mukhin'
}


const element = (
    getGreeting(user)
);

const element1 = <div tabIndex="0"></div>;

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {element}
        {element1}
      </div>
    );
  }
}

export default App;
