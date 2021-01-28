import React, { useState } from 'react';
import { Router, Switch, Route } from 'react-router-dom';

import history from '../history';
import About from './About';
import Experience from './Experience';
import AppBarTop from './AppBarTop';
import Sidebar from './Sidebar';

import '../styles/styles.css';

const App = () => {
  const [drawerState, setDrawerState] = useState(false);
  return (
    <div>
      <Router history={history}>
        <div>
          <AppBarTop
            drawerState={drawerState}
            setDrawerState={setDrawerState}
          />
          <Sidebar drawerState={drawerState} setDrawerState={setDrawerState} />
        </div>
        <Switch>
          <Route path="/" exact component={About}></Route>
          <Route path="/experience" exact component={Experience}></Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
