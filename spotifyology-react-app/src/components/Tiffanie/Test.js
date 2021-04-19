import React from 'react';
import { css } from 'emotion';
import {colors} from '../../styles/index.tsx';

class Test extends React.Component {

    playlistSongComponent = css`
    display: flex;
    width: 80%;
    text-align: left;
    vertical-align: middle;
    align-items: center;
    background-color: ${colors.white};
    border-radius: 25px;
    `;
    songDetailsColumn =  css`
        flex-flow: column;
    `;
    letter =  css`
        width: 10%;
        vertical-align: middle;
        text-align: center;
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

export default Test;