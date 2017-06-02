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

function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}

function myComponent() {
    return (
        <div>
            <Welcome name="Sara" />
            <Welcome name="Cahal" />
            <Welcome name="Edite" />
        </div>
    );
}

const user = {
    firstName: 'Vyacheslav',
    lastName: 'Mukhin',
    avatarUrl: '/static/media/logo.5d5d9eef.svg'
}

const userTest = {
    author: {
        name: "Hello Kitty",
        avatarUrl: "http://placekitten.com/g/64/64"
    },
    date: new Date(),
    text: "I hope you enjoy learning React!"
}

function formatDate(date) {
    return date.toLocaleDateString();
}

function Comment(props) {
    return (
        <div className="Comment">
            <UserInfo user={props.author} />
            <div className="Comment-text">
                {props.text}
            </div>
            <div className="Comment-date">
                {formatDate(props.date)}
            </div>
        </div>
    );
}

function Avatar(props) {
    return (
        <img className="Avatar"
             src={props.user.avatarUrl}
             alt={props.user.name}
        />
    );
}

function UserInfo(props) {
    return (
        <div className="UserInfo">
            <Avatar user={props.user} />
            <div className="UserInfo-name">
                {props.user.name}
            </div>
        </div>
    );
}

const element = (
    getGreeting(user)
);

const element1 = <div tabIndex="0"></div>;

const element2 = <img src={user.avatarUrl} className="App-logo" alt="logo" />

const element3 = (
    <div>
        <h1>Hello!</h1>
        <h2>Good to see you here.</h2>
    </div>
);

const element4 = (
    <h1 className="greeting">
        Hello, world!
    </h1>
);

const element5 = React.createElement(
    'h1',
    {className: 'greeting'},
    'Hello, world!'
);

const element6 = <Welcome name="Sara" />;

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
        {element3}
        {element4}
        {element5}
        {element6}
        {myComponent()}
        {Comment(userTest)}
      </div>
    );
  }
}

export default App;
