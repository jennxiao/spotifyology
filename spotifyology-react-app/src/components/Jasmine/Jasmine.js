import React, { useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { css } from 'emotion';
import Posts from './Posts.js';
import Header from './Header.js'
import Home from './Home.js'

import { BrowserRouter, Route, Switch } from 'react-router-dom';




class Jasmine extends React.Component {
    constructor(props) {
        super(props); 
    }

    render() {
        return (
        <body>
            <Switch>
                <Route path="/">
                <Home />
                </Route>
            </Switch>
        </body>
        );
    }
  }
  
  export default Jasmine;