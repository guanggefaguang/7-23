import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import School from './Components/School';
import registerServiceWorker from './registerServiceWorker';

//ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(
        <School />,
    document.getElementById('root'));
registerServiceWorker();
