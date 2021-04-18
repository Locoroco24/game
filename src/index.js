import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import App from './App';
import {initialState, reducer} from './store/reducer';
import reportWebVitals from './reportWebVitals';

const store = createStore(reducer, initialState, applyMiddleware(thunk));

const app = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));

reportWebVitals();
