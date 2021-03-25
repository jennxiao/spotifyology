import React from 'react';
import image from './ponyo036.jpg';
//this is for "this is some red text"
import './styles.css';

//this is for exampleStyle of "This is some styled text"
import { css } from '@emotion/css';

class Clock extends React.Component {

  // if you wanna do styles like this, then you have to run 
  // npm i emotion
  exampleStyle = css`
    padding-left: 10px;
    color: green;
  `;
  

    constructor(props) {
        super(props); 
        this.state = {
            staticdate: "November 1",
            date: new Date(),
            clockName: props.name,
        }
    }
    render () {
        return (
              <div>
                <h1 
                  style = {{
                    color: "lightblue"
                  }}> {this.state.clockName}
                </h1>
                <h1 className={this.exampleStyle}> This is some styled text </h1>
                <h1 className={"redText"}> This is some red text </h1>
                
                <h2> This is a date object that changes over time: {this.state.date.toLocaleTimeString()} </h2>
                <h2> this is the static date: {this.state.staticdate} </h2>
                <img src={image}/>
              </div>
          );
    }
  }
  
export default Clock;