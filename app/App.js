import React from 'react';
import OrderContainer from './components/OrderContainer';
import { configureStore } from './stores/configureStore';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

var store = configureStore();

var root = <Provider store = { store }><OrderContainer /></Provider>
render(root, document.getElementById('app'))