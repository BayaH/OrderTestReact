import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import OrderMainContainer from './components/OrderMainContainer';
import configureStore from './stores/configureStore';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

injectTapEventPlugin();

var store = configureStore();

var root = <Provider store = { store }><OrderMainContainer /></Provider>;
render(root, document.getElementById('app'));
