import React from 'react';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';

import App from '../components/App';
import Home from '../components/Home';
import Search from '../components/Search';
import Create from '../components/Create';
import Status from '../components/Status';
import RestaurantList from '../components/RestaurantList';

export default (
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="search" component={Search}/>
            <Route path="create" component={Create}/>
            <Route path="status" component={Status}/>
            <Route path="list" component={RestaurantList}/>
        </Route>
    </Router>
);
