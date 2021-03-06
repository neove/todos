import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/todos';
import {Provider} from 'react-redux';
import {store} from './redux/store'
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.body.appendChild(document.createElement('div'))
);
