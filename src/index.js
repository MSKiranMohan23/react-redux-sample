import React from 'react';
import ReactDOM from 'react-dom';
import "@babel/polyfill";
import 'core-js/es6/map';
import App from './App';

import { Provider } from 'react-redux';
import Store from './store';
import registerServiceWorker from './registerServiceWorker';
let storeInstance = Store();

ReactDOM.render(
    <Provider store={storeInstance}>
        <App/>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
