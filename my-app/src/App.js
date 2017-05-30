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
    lastName: 'Mukhin',
    avatarUrl: '/static/media/logo.5d5d9eef.svg'
}


const element = (
    getGreeting(user)
);

const element1 = <div tabIndex="0"></div>;

const element2 = <img src={user.avatarUrl} className="App-logo" alt="logo" />

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          {element2}
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
