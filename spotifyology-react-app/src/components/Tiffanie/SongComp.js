import React from 'react';
import { css } from 'emotion';
import {colors} from '../../styles/index.tsx';

class SongComp extends React.Component {

    playlistSongComponent = css`
    display: flex;
    width: 60%;
    text-align: right;
    vertical-align: middle;
    align-items: center;
    background-color: ${colors.white};
    padding: 20px;
    font-size: 17px
    `;
    songDetailsColumn =  css`
        flex-flow: column;
    `;
    letter =  css`
        width: 10%;
        vertical-align: middle;
        text-align: center;
        font-weight: bold;
    `;


    constructor(props) {
        super(props);
        this.state = {
           letter: props.letter,
           title: props.title,
           artist: props.artist
        }
    }

    render() {
        return (
                <div className={this.playlistSongComponent}>
                  <div className={this.letter}>
                    {this.state.letter}
                  </div>
                  <div className={this.songDetailsColmun}>
                    {this.state.title} -- {this.state.artist}
                  </div>
                </div>
             );
    }
}

export default SongComp;
