import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Timer from './Timer';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<h1>Hello, world!</h1>, document.getElementById('root'));

ReactDOM.render(< Timer />,document.getElementById('root-time'));

registerServiceWorker();