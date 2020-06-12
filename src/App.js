import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Home, CST4310, CST4320, CST4330, CST4350 } from './pages';
import Layout from './layout';
import { ThemeContext, themes } from './theme-context';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.toggleTheme = () => {
      this.setState((state) => ({
        theme: state.theme === themes.gray ? themes.rainbow : themes.gray,
      }));
    };
    // alert('Theme is: ' + this.state.theme);

    this.state = {
      theme: themes.gray,
      toggleTheme: this.toggleTheme,
      cst4310Records: [],
    };
  }

  componentDidMount() {
    fetch(
      'https://api.airtable.com/v0/appeImf1TLInjENnH/CST4310?api_key=keyaHIT3dGLVbemjK'
    )
      .then((resp) => resp.json())
      .then((data) => {
        this.setState({ cst4310Records: data.records });
      })
      .catch((err) => {
        // Error :(
        console.log('ERROR', err);
      });
  }

  render() {
    return (
      <Router>
        <ThemeContext.Provider value={this.state}>
          <Layout>
            <Switch>
              <Route path='/cst4310'>
                <CST4310 data={this.state.cst4310Records} />
              </Route>
              <Route path='/cst4320'>
                <CST4320 data={this.state.cst4310Records} />
              </Route>
              <Route path='/cst4330'>
                <CST4330 data={this.state.cst4310Records} />
              </Route>
              <Route path='/cst4350'>
                <CST4350 data={this.state.cst4310Records} />
              </Route>

              <Route path='/'>
                <Home />
              </Route>
            </Switch>
          </Layout>
        </ThemeContext.Provider>
      </Router>
    );
  }
}

export default App;
