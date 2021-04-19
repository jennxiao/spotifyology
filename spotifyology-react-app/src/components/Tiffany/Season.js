import React, { useRef } from 'react';
// import { NavLink } from 'react-router-dom';
import { css } from 'emotion';
import {colors} from '../../styles/index.tsx';
import { Card, Avatar } from 'antd';
import 'antd/dist/antd.css';

const { Meta } = Card;

class Season extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
            season: props.season,
            albumArt: props.albumArt,
            artistArt: props.artistArt,
            song: props.song,
            artist: props.artist
        } 
        
    }

    render() {
        return (
            <Card title = {this.state.season} bordered={false}>
                <Card
                    style={{ width: 300 }}
                    cover={
                    <img
                        alt="example"
                        src= {this.state.albumArt}
                    />
                    }
                >
                    <Meta
                    avatar={<Avatar src= {this.state.artistArt} />}
                    title={this.state.song}
                    description={this.state.artist}
                    />
                </Card>
                </Card>
        );
    }
  }

export default Season;