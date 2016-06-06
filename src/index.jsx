import React from 'react';
import ReactDOM from 'react-dom';
import {List, Map} from 'immutable';
import {compose, createStore} from 'redux';
import {Provider} from 'react-redux';

import reducer from './reducer';

import {TodoAppContainer} from './components/TodoApp';

const createStoreDevTools = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore);
// We instantiate a new Redux store
const store = createStoreDevTools(reducer);
// We dispatch the SET_STATE action holding the desired state
store.dispatch({
  type: 'SET_STATE',
  state: {
    todos: [
      {id: 1, text: 'React', status: 'active', editing: false},
      {id: 2, text: 'Redux', status: 'active', editing: false},
      {id: 3, text: 'Immutable', status: 'active', editing: false},
    ],
    filter: 'all'
  }
});

require('../node_modules/todomvc-app-css/index.css');

ReactDOM.render(
  <Provider store={store}>
    <TodoAppContainer />
  </Provider>,
  document.getElementById('app')
);