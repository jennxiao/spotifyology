import React, {Component} from "react";
import "./Jas.css"
import postData from "./Data.js"
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Page from "./Page.js"
import album from './heatwave.jpeg';


export const Posts = () => {
    var currDate = new Date();

    return (
        <div className = "post-container">
            {postData.map((post) => {
                var temp = post.published
                var postDate = Date.parse(temp)
                
                return (
                    <div className="card">
                        <div className="left">
                            <img src={album} alt="skyline" height="50%" width="75%" id="image"/>
                            <Route path="/Page" components={Page}></Route>
                            <h1 className="titlepost"><Link to="/Page">{post.title} - {post.author}</Link></h1>
                            
                    
                        </div>
                        <div className="right">
                            <h6 id="votes">Current Rank: {post.upvotes}</h6>
                            <h6 id="votes">Previous Rank: {post.downvotes}</h6>
                        </div>

                        
                        


                    </div>
                )
            })}

        </div>
        
        

    );
        
    
    
};

export default Posts;