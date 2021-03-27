import React from 'react';
import { BrowserRouter as Router, Route, NavLink} from 'react-router-dom';
import './App.css';
import {spacing, colors} from './styles/index.tsx';
import { css } from '@emotion/css';
import './App.css';
// import { buildPageSpacing, spacing, fontStyles, colors } from './styles';
// import { inject as injectGlobalStyles } from './styles';
import Jennifer from './components/Jennifer/Jennifer';
import David from './components/David/David';
import Jasper from './components/Jasper/Jasper';
import Jasmine from './components/Jasmine/Jasmine';
import Sady from './components/Sady/Sady';
import Tiffanie from './components/Tiffanie/Tiffanie';
import Tiffany from './components/Tiffany/Tiffany';
import NavigationBar from './components/NavBar';

function App() {

  const styles = {
    link: css`
    flex: 1;
    text-decoration: none;
    align-items: center;
    margin-right:  ${spacing.regular};
  `,
    activeLink: css`
    border-bottom-width: 2px;
    padding: 2px;
    border-bottom-style: inset;
  `,
  }

  return (
    <Router>
      <div className="App">
       
        <NavigationBar />
      
        <Route exact path="/jennifer" component={Jennifer} />
        <Route path="/david" component={David} />
        <Route path="/jasper" component={Jasper} />
        <Route path="/jasmine" component={Jasmine} />
        <Route path="/sady" component={Sady} />
        <Route path="/tiffanie" component={Tiffanie} />
        <Route path="/tiffany" component={Tiffany} />


      </div>
    </Router>
  );

}


export default App;
