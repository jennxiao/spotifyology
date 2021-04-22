import React, { useRef } from 'react';
import { css } from 'emotion';
import background_image from './background-default.png';
import spotify_logo from './spotify-logo.png';
import KeywordButton from './KeywordButton';

import SpotifyWebApi from 'spotify-web-api-js';
const spotifyApi = new SpotifyWebApi();


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
        const params = this.getHashParams();
        const token = params.access_token;
        if (token) {
            spotifyApi.setAccessToken(token);
        }
        this.state = {
            loggedIn: token ? true : false,
            token: "",
        }
    }

    render() {
        return this.state.loggedIn ? 
            (
                <div className={this.background} style={{ backgroundImage: `url(${background_image})` }}> 
                    <p className={this.welcomeSub}> You're in </p>
                </div>
            ) 
            :
            (
            <body className={this.background} style={{ backgroundImage: `url(${background_image})` }}>
                <div className={this.title}>
                    <p className={this.welcome}>Welcome to</p>
                    <p className={`${this.welcome}-keywordify`}>Keywordify</p>
                </div>
                <p className={this.welcomeSub}>Your Personal Playlist Generator</p>
                <button onClick={this.logIn} 
                    className={this.spotifyConnect}><img className={this.spotifyLogo} 
                    src={spotify_logo} />
                        <p className={this.spotifyText}>LOGIN WITH SPOTIFY</p>
                </button>
            </body>
            );
    }

    logIn() {
        window.location.href =
            'https://accounts.spotify.com/authorize?client_id=91cbde34750a44d586b75afd41fc09b3&scope=playlist-read-private%20playlist-read-collaborative%20playlist-modify-public%20user-read-recently-played%20playlist-modify-private%20ugc-image-upload%20user-follow-modify%20user-follow-read%20user-library-read%20user-library-modify%20user-read-private%20user-read-email%20user-top-read%20user-read-playback-state&response_type=token&redirect_uri=http://localhost:3000/David/';
    }

    componentDidMount() {
        let hashParams = {};
        let e,
          r = /([^&;=]+)=?([^&;]*)/g,
          q = window.location.hash.substring(1);
        while ((e = r.exec(q))) {
          hashParams[e[1]] = decodeURIComponent(e[2]);
        }
    
        if (!hashParams.access_token) {
          this.setState({loggedIn : false})
        } else {
            this.setState({token : hashParams.access_token})
            spotifyApi.setAccessToken(this.state.token);
        }
    }

    getHashParams() {
        var hashParams = {};
        var e, r = /([^&;=]+)=?([^&;]*)/g,
            q = window.location.hash.substring(1);
        e = r.exec(q)
        while (e) {
           hashParams[e[1]] = decodeURIComponent(e[2]);
           e = r.exec(q);
        }
        return hashParams;
    }
  }
  
  export default David;