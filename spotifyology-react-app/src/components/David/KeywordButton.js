import React, { useRef } from 'react';
import { css } from 'emotion';
import './fonts.css';

class KeywordButton extends React.Component {

    keywordButtonComponentBox = css`
        display: flex;
        background-color: #393939;
        border-radius: 15pt;
        text-align: left;
    `;
    keyword = css`
        flex-flow: row;
        font-size: 50px;
        font-family: "Montserrat", sans-serif;
        font-weight: bold;
        
        background-image: ${this.state.colorScheme};
        background-size: 100%;
        background-repeat: repeat;

        -webkit-background-clip: text;
        -moz-background-clip: text;
        -webkit-text-fill-color: transparent; 
        -moz-text-fill-color: transparent;
    `;
    description = css`
        flex-flow: row;
        font-size: 22px;
        font-family: "Montserrat", sans-serif;
        font-style: normal;
        font-weight: 600;
        color: #B4B4B4;
    `;

    constructor(props) {
        super(props); 
        this.state = {
            keyword: props.keyword,
            description: props.description,
            colorScheme: props.colorScheme,
            colorTag: props.colorTag
        };
        this.keyword = this.keyword.bind(this);
        this.colorScheme = this.colorScheme.bind(this);
    }

    render() {
        return (
            <button className={this.keywordButtonComponentBox}>
                <div className={this.keywordDetailsColumn}>
                    <div className={this.keyword}>
                        {this.state.keyword}
                    </div>
                    <div className={this.description}>
                        {this.state.description}
                    </div>
                </div>    
            </button>
        )
    }
}

export default KeywordButton;