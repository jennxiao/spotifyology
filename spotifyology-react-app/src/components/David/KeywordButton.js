import React, { useRef } from 'react';
import { css } from 'emotion';
import './fonts.css';

class KeywordButton extends React.Component {

    keywordButtonComponentBox = css`
        display: flex;
        flex-direction: row;
        background-color: #393939;
        border-radius: 15pt;
        text-align: left;
        height: 220px;
        width: 41.45%;
    `
    keywordDetailsColumn = css`
        display: flex;
        flex-direction: column;
        padding-left: 5%;
        padding-top: 4%;
        width: 100%;
    `
    keyword = css`
<<<<<<< HEAD
        &-upbeat {
            font-size: 300%;
            font-family: "Montserrat", sans-serif;
            font-weight: 700;

            background-color: black;
            background-image: linear-gradient(180deg, #FD0000, #FFA360);
            background-size: 100%;
            background-repeat: repeat;

            -webkit-background-clip: text;
            -moz-background-clip: text;
            -webkit-text-fill-color: transparent; 
            -moz-text-fill-color: transparent;
        }

        &-chill-vibes {
            font-size: 300%;
            font-family: "Montserrat", sans-serif;
            font-weight: 700;

            background-color: black;
            background-image: linear-gradient(180deg, #06B52C, #0DE9DB);
            background-size: 100%;
            background-repeat: repeat;

            -webkit-background-clip: text;
            -moz-background-clip: text;
            -webkit-text-fill-color: transparent; 
            -moz-text-fill-color: transparent;
        }

        &-crying-in-the-club {
            font-size: 300%;
            font-family: "Montserrat", sans-serif;
            font-weight: 700;

            background-color: black;
            background-image: linear-gradient(180deg, #00CFFD, #5671FF);
            background-size: 100%;
            background-repeat: repeat;

            -webkit-background-clip: text;
            -moz-background-clip: text;
            -webkit-text-fill-color: transparent; 
            -moz-text-fill-color: transparent;
        }

        &-throwbacks {
            font-size: 300%;
            font-family: "Montserrat", sans-serif;
            font-weight: 700;

            background-color: black;
            background-image: linear-gradient(180deg, #D0ABFF, #A716FF);
            background-size: 100%;
            background-repeat: repeat;

            -webkit-background-clip: text;
            -moz-background-clip: text;
            -webkit-text-fill-color: transparent; 
            -moz-text-fill-color: transparent;
        }
    `
    description = css`
        font-size: 150%;
        font-family: "Montserrat", sans-serif;
        font-style: normal;
        font-weight: 600;
        color: #B4B4B4;
        padding-right: 15%;
        padding-top: 2%;
        padding-bottom: 7.5%;
    `

    keywordTag = css`
        &-upbeat {
            display: flex;
            background-color: #E35F5F;
            border-radius: 0px 14px 14px 0px;
            width: 5%;
        }

        &-chill-vibes {
            display: flex;
            background-color: #89E35F;
            border-radius: 0px 14px 14px 0px;
            width: 5%;
        }

        &-crying-in-the-club {
            display: flex;
            background-color: #5F9CE3;
            border-radius: 0px 14px 14px 0px;
            width: 5%;
        }

        &-throwbacks {
            display: flex;
            background-color: #DC7AFF;
            border-radius: 0px 14px 14px 0px;
            width: 5%;
        }
    `

    constructor(props) {
        super(props); 
        this.state = {
            keyword: props.keyword,
            description: props.description,
            colorTag: props.colorTag,
            colorScheme: props.colorScheme
        };
    }

    render() {
        return (
            <div className={this.keywordButtonComponentBox}>
                <div className={this.keywordDetailsColumn}>
                    <div className={`${this.keyword}-${this.state.colorTag}`}>
                        {this.state.keyword}
                    </div>
                    <div className={this.description}>
                        {this.state.description}
                    </div>
                </div>
                <div className={`${this.keywordTag}-${this.state.colorTag}`}>
                </div>
            </div> 
        )
    }
}

export default KeywordButton;