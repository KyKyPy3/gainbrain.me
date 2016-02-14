/* tslint:disable */
import * as React from 'react';
/* tslint:enable */
import { browserHistory } from 'react-router';
import {Router, Route} from 'react-router';
import App from '../App';

export default (
  <Router history={browserHistory}>
    <Route path='/'component={App} />
  </Router>
)
