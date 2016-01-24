import ReactDOM from 'react-dom';
import React from 'react';
import OrderContainer from './components/OrderContainer';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

ReactDOM.render(<OrderContainer />, document.getElementById('app'))