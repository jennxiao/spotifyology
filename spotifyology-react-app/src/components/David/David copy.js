import React, { useRef } from 'react';
import { css } from 'emotion';
import { NavLink } from 'react-router-dom';
import KeywordButton from './KeywordButton';
import background_Image from './background-default.png';
import '../../index.css';
import { findLastIndex } from 'lodash';
import { findByText } from '@testing-library/dom';


class David extends React.Component {
    background = css`
        background-image: linear-gradient(180deg, #212121, #21444B);
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;

        width: 100%;
        height: 100%;
    `
    row = css`
        display: flex;
        flex-direction: row;
    `

    constructor(props) {
        super(props); 
    }

    render() {
        return (
        <body className={this.background}>
            <div className={this.row}>
                <KeywordButton
                        keyword = "Upbeat"
                        description = "Cheerful, exciting music to listen to when you’re feeling down or you just want to turn up"
                        colorTag = "upbeat"
                />
                <KeywordButton
                    keyword = "Chill Vibes"
                    description = "Toned down, feel-good, or relaxing music to vibe to"
                    colorTag = "chill-vibes"
                />
            </div>
            <br/>
            <div className={this.row}>
                <KeywordButton
                    keyword = "Crying in the Club"
                    description = "When you feel sad for any reason and you need songs to help you cry through it"
                    colorTag = "crying-in-the-club"
                />
                <KeywordButton
                    keyword = "Throwbacks"
                    description = "Throwbacks to all your favorite songs s~ back in the days ~"
                    colorTag = "throwbacks"
                />
            </div>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        </body>
        );
    }
  }
  
  export default David;