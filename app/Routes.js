import React from 'react';
import { Switch, Route, Redirect } from 'react-router';
import routes from './constants/routes';
import App from './containers/App';

import Home from './containers/Home';
import Related from './containers/Related';
import Playlist from './containers/Playlist';

export default () => (
  <App>
    <Switch>
      <Route exact path="/home" component={Home} />
      <Route exact path="/related/:id" component={Related} />
      <Route exact path="/playlist" component={Playlist} />
      <Redirect exact to="/home" />
    </Switch>
  </App>
);
