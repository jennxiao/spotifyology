
import Posts from './Posts.js';
import Header from './Header.js'
import React, {Component} from "react";

class Home extends React.Component{ 
    render() {
        return (
            <div className="home">
                <Header/>
                <Posts/>
            </div>
           

        )
    }
}

export default Home;