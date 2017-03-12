import React from 'react';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';

import App from '../components/App';
import Home from '../components/Home';
import Create from '../components/Create';

export default (
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="create" component={Create}/>
        </Route>
    </Router>
);
