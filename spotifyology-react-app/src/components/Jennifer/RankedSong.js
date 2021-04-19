import React, { useRef } from 'react';
// import { NavLink } from 'react-router-dom';
import { css } from 'emotion';
import {colors} from '../../styles/index.tsx';
import image from './album.jpeg'


class RankedSong extends React.Component {

    rankedSongComponentBox = css`
        display: flex;
        width: 80%;
        text-align: left;
        vertical-align: middle;
        align-items: center;
        background-color: ${colors.white};
        border-radius: 25px;
        `;
    songArtistRow = css`
        flex-flow: row;
        font-family
    `;
    songDetailsColumn =  css`
        flex-flow: column;
    `;
    albumArt = css`
        width: 30%;
        padding: 5px;
        text-align: center;
    `;
    rank =  css`
        width: 10%;
        vertical-align: middle;
        text-align: center;
    `;
    albumnNameRow =  css`
        flex-flow: row;
    `;


    constructor(props) {
        super(props); 
        this.state = {
            rank: props.rank,
            albumArt: props.image,
            title: props.title,
            artist: props.artist,
            album: props.album
        } 
        
    }
    
    render() {
        return (
            <div className={this.rankedSongComponentBox}>
                <div className={this.rank}>
                    {this.state.rank}
                </div>
                <div className={this.albumArt}>
                    <img className={this.albumArt} src={this.state.albumArt}/>
                </div>
                <div className={this.songDetailsColumn}>
                    <div className={this.songArtistRow}>
                        {this.state.title} -- {this.state.artist}
                    </div>
                    <div className={this.albumnNameRow}>
                        {this.state.album}
                    </div>
                </div>
            </div>
        );
    }
  }
  
  export default RankedSong;