import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

/*ReactDOM.render(
  <App />,
  document.getElementById('root')
);*/


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
  firstName: '',
  lastName: ''
};

const element = (
  <h1>
    Hello, {formatName(user)}!
  </h1>
);

ReactDOM.render(
  element,
  document.getElementById('root')
);