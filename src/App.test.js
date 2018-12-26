import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import User from './Components/User'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<User />, div);
  ReactDOM.unmountComponentAtNode(div);
});
