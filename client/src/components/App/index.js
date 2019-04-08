import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import * as routes from '../../routes';
import history from '../../history';

import NavHeader from '../Header/Header';

const App = () => {
  return (
    <div className='ui container'>
      <Router history={history}>
        <NavHeader />
        <Switch>
          {routes.publicRoutes.map(props => (
            <Route {...props} />
          ))}
        </Switch>
      </Router>
    </div>
  );
};

export default App;
