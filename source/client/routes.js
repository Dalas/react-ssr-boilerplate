/**
 * Created by yura on 07.07.17.
 */

import React from 'react';
import { Router, Route } from 'react-router';

import testContainer from './containers/testContainer';


export default [
    {
        path: '/',
        component: testContainer
    }
];


export default history => {
    return (
        <Router history={ history }>
            <Route path="/" component={ testContainer } />
        </Router>
    )
}

