import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import PropTypes from 'prop-types'
import {createStore} from 'redux'
import {Provider, connect} from 'react-redux'

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
