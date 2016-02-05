import React from 'react';
import OrderMainContainer from './components/OrderMainContainer';
import configureStore from './stores/configureStore';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

var store = configureStore();

var root = <Provider store = { store }><OrderMainContainer /></Provider>;
render(root, document.getElementById('app'));
