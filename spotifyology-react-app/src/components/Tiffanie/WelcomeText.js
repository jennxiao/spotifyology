import React from 'react';
import { css } from 'emotion';
import {colors} from '../../styles/index.tsx';

class WelcomeText extends React.Component {

    welcomeText = css`
    display: flex;
    width: 40%;
    height: 30px;
    vertical-align: middle;
    align-items: right;
    border-radius: 25px;
    `;
    text =  css`
      font-size: 30px;
      text-align: left;
      margin: 2%;
    `
    constructor(props) {
        super(props);
        this.state = {
           text: props.text,
        }
    }

    render() {
        return (
                <div className={this.wordInput}>
                  <div className={this.text}>
                    {this.state.text}
                  </div>
                </div>
             );
    }
}

export default WelcomeText;
