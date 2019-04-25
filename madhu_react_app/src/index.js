import React from 'react';
import ReactDOM from 'react-dom';

import './components/index.css';
import App from './App';
import App1 from './components/App1'
import * as serviceWorker from './serviceWorker';
// import Login from './components/Login';
import Sample from './components/Sample';
import './components/Sample.css'
import PersonalCard1 from './components/Personal1';
import Student1 from './components/Student1';

ReactDOM.render(<App1 />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

