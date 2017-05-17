/*jshint esversion: 6 */
import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
import {createStore} from 'redux';
import allReducers from './reducers'

const store = createStore(allReducers);

console.log(store);

ReactDOM.render(
    <h1>Hey Now</h1>,
    document.getElementById('root')
);
