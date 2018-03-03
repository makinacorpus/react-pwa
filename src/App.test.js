import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import App from './App';

var MockAdapter = require('axios-mock-adapter');

// This sets the mock adapter on the default instance
var mock = new MockAdapter(axios);

mock.onAny().reply(200, {
  articles: [
    { title: 'a' },
    { title: 'b' }
  ]
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
