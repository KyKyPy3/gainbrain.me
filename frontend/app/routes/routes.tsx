/* tslint:disable */
import * as React from 'react';
/* tslint:enable */
import { hashHistory  } from 'react-router';
import {Router, Route} from 'react-router';
import App from '../App';

export default (
  <Router history={hashHistory}>
    <Route path='/' component={App} />
  </Router>
)
