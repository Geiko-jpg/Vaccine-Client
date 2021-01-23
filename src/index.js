import React from 'react';
import ReactDOM from 'react-dom';

// - - > ROUTER COMPONENTS
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';
import './index.css';

ReactDOM.render(
    <Router>
        <div>
            <Routes />
        </div>
    </Router>,
    document.getElementById('root')
);