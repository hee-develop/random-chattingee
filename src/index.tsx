import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return (
    <div>Hello, world!</div>
  );
};

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<App />, document.body.appendChild(document.createElement('div')))
});
