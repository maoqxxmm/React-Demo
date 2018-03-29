import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import rootReducer from './reducers';
import './styles/main.scss';
import Tasklist from './routers/tasklist';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(rootReducer, /* preloadedState, */ devToolsEnhancer(
    // Specify name here, actionsBlacklist, actionsCreators and other options if needed
  ));

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <div>
                <Route path="/" component={Tasklist} />
            </div>
        </Router>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
