import React from 'react';
import { BrowserRouter as Router, Route, Redirect, NavLink} from 'react-router-dom';
import './App.css';
// import {spacing, colors} from './styles/index.tsx';
// import { css } from '@emotion/css';
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
import HomePage from './components/HomePage';

function App() {

  return (
    <Router>
      <div className="App">
       
        <NavigationBar />

        <Route exact path="/" component={HomePage} >  <Redirect to="/home" /> </Route>
        <Route exact path="/home" component={HomePage} />
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
