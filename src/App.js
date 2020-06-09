import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Home, CST4310, CST4320, CST4330, CST4350 } from './pages';
import { Layout } from './layout';

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path='/cst4310'>
            <CST4310 />
          </Route>
          <Route path='/cst4320'>
            <CST4320 />
          </Route>
          <Route path='/cst4330'>
            <CST4330 />
          </Route>
          <Route path='/cst4350'>
            <CST4350 />
          </Route>

          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
