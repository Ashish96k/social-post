import React, { useContext } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { ToolContext } from './store/context';
import Auth from './pages/Auth/Auth';
import Home from './pages/Home/Home';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import SideDrawer from './components/Navigation/SideDrawer';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const context = useContext(ToolContext);

  return (
    <div className="">
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/auth" />} />
        <Route exact path="/auth" component={Auth} />
        {context.auth ? (
          <>
          <SideDrawer>
            <Route exact path="/home" component={Home} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/profile" component={Profile} />
          </SideDrawer>
          </>
        ) : (
          <Redirect to="/auth" />
        )}
      </Switch>
    </div>
  );
}

export default App;
