import React, { useRef } from 'react';
import { css } from 'emotion';
import background_image from './background-default.png';
import spotify_logo from './spotify-logo.png';
import KeywordButton from './KeywordButton';


class David extends React.Component {
    background = css`
        // background-image: linear-gradient(180deg, #212121, #21444B);

        background-size: 100% 100%;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;

        display: flex;
        flex-direction: column;
        align-items: center;

        height: 986px;
        width: 100%;
    `

    title = css`
        display: flex;
        flex-direction: row;
        margin: 0;
        padding-top: 15%;

    `

    welcome = css `
        font-size: 500%;
        font-family: "Montserrat", sans-serif;
        font-weight: 700;
        color: white;
        margin: 0;

        &-keywordify {
            font-size: 500%;
            font-family: "Montserrat", sans-serif;
            font-weight: 700;
            color: white;
            margin: 0;
            padding-left: 20px;

            background-color: #15B2B2;
            background-image: linear-gradient(180deg, transparent, transparent, #67EFA5, #FFBABA, #FFBABA);
            background-size: 100%;
            background-repeat: repeat;

            -webkit-background-clip: text;
            -moz-background-clip: text;
            -webkit-text-fill-color: transparent; 
            -moz-text-fill-color: transparent;
        }
    `

    welcomeSub = css `
        font-size: 250%;
        font-family: "Montserrat", sans-serif;
        font-weight: 700;
        color: #618A85;
        margin: 0;
    `

    spotifyConnect = css `
        display: flex;
        flex-direction: row;
        align-items: center;

        height: 79px;
        min-width: 451px;

        border: 0px;
        border-radius: 50px;
        margin-top: 4%;
        
        background-color: #1DB954;
    `

    spotifyLogo = css `
        width: 38px;
        justify-contnent: flex-start;
        margin-left: 15px;
    `

    spotifyText = css `
        justify-contnent: center;
        margin: 0;
        margin-left: 10%;
        
        font-family: "Montserrat", sans-serif;
        color: white;
        font-size: 23px;
    `


    constructor(props) {
        super(props); 
    }

    render() {
        return (
        <body className={this.background} style={{ backgroundImage: `url(${background_image})` }}>
            <div className={this.title}>
                <p className={this.welcome}>Welcome to</p>
                <p className={`${this.welcome}-keywordify`}>Keywordify</p>
            </div>
            <p className={this.welcomeSub}>Your Personal Playlist Generator</p>
            <button className={this.spotifyConnect}><img className={this.spotifyLogo} src={spotify_logo} /><p className={this.spotifyText}>LOGIN WITH SPOTIFY</p></button>
        </body>
        );
    }
  }
  
  export default David;