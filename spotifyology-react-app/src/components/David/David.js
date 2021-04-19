import React, { useRef } from 'react';
import { css } from 'emotion';
import background_image from './background-default.png';
import KeywordButton from './KeywordButton';


class David extends React.Component {
    background = css`
        background-image: linear-gradient(180deg, #212121, #21444B);

        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: 100% 100%;
        object-fit: cover;

        display: flex;
        flex-direction: column;
        align-items: center;

    `
    title = css`
        display: flex;
        flex-direction: column;
    `

    welcome = css `
        font-size: 500%;
        font-family: "Montserrat", sans-serif;
        font-weight: 700;
        color: white;
        margin: 0;
    `

    welcomeSub = css `
        font-size: 250%;
        font-family: "Montserrat", sans-serif;
        font-weight: 700;
        color: #618A85;
        margin-top: 1%;
    `

    constructor(props) {
        super(props); 
    }

    render() {
        return (
        <body className={this.background}>
            <p className={this.welcome}>Welcome to Keywordify</p>
            <p className={this.welcomeSub}>Your Personal Playlist Generator</p>
        </body>
        );
    }
  }
  
  export default David;