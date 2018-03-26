import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom';
import './styles/main.scss';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Router>
        <div>
            <Route path="/" component={App} />
        </div>
    </Router>,
    document.getElementById('root')
);
registerServiceWorker();
