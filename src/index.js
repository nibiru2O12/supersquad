import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';
import './styles/index.css';

import {createStore} from 'redux';
import {Provider} from 'react-redux';

import rootReducer from './reducers';
import {addCharacterById} from './action';

const store=createStore(rootReducer);
console.log('createStore()',store.getState());
store.subscribe(()=>{ console.log(store.getState()) });
store.dispatch(addCharacterById(2));

ReactDOM.render(
  <Provider store={store}>
    <App  />
  </Provider>,
  document.getElementById('root')
);
