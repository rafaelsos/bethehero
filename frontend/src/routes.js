import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Logon from './pages/Logon';
import Register from './pages/Register';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Logon} />
      <Route path="/register" component={Register} />
    </Switch>
  );
}
