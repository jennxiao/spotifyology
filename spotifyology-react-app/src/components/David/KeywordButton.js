import React, { useRef } from 'react';
import { css } from 'emotion';
import './fonts.css';

class KeywordButton extends React.Component {

    keywordButtonComponentBox = css`
        display: flex;
        background-color: #393939;
        border-radius: 15pt;
        text-align: left;
        padding-left: 35px;
        width: 39%;
        word-wrap: break-word;
    `;
    keyword = css`
        flex-flow: row;
        font-size: 50px;
        font-family: "Montserrat", sans-serif;
        font-weight: 700;
        
        background-color: red;
        background-image: linear-gradient(180deg, #FD0000, #FFA360);
        background-size: 100%;
        background-repeat: repeat;
        -webkit-background-clip: text;
        -moz-background-clip: text;
        -webkit-text-fill-color: transparent; 
        -moz-text-fill-color: transparent;
        padding-top: 18px;
    `;
    description = css`
        flex-flow: row;
        font-size: 22px;
        font-family: "Montserrat", sans-serif;
        font-style: normal;
        font-weight: 600;
        color: #B4B4B4;
        padding-top: 15pt;
        padding-bottom: 18pt;
        padding-right: 75pt;
    `;
    keywordTag = css`
        display: flex;
        flex-flow: column;
        background-color: #E35F5F;
        border-radius: 0px 14px 14px 0px;
        height: 200px;
        width: 50px;
    `;

    constructor(props) {
        super(props); 
        this.state = {
            keyword: props.keyword,
            description: props.description,
            colorScheme: props.colorScheme,
            colorTag: props.colorTag
        };
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
                <div className={this.keywordTag}>
                </div>
            </button> 
        )
    }
}

export default KeywordButton;