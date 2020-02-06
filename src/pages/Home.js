import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import Profile from './Profile';

const Home = () => {
  return (
    <div>
      {/* <Switch>
        <Route exact path='/dashboard' component={Dashboard} />
        <Route exact path='/profile' component={Profile} />
      </Switch> */}
      Hello from home
    </div>
  );
};

export default Home;
