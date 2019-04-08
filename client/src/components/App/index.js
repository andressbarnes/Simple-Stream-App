import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import * as routes from '../../routes';

import NavHeader from '../Header/Header';

const App = () => {
  return (
    <div className='ui container'>
      <BrowserRouter>
        <NavHeader />
        <Switch>
          {routes.publicRoutes.map(props => (
            <Route {...props} />
          ))}
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
