import React from 'react';
import { css } from 'emotion';
import {colors} from '../../styles/index.tsx';

class WordInput extends React.Component {

    wordInput = css`
    display: flex;
    width: 60%;
    height: 30px;
    text-align: center;
    vertical-align: middle;
    align-items: right;
    border-radius: 25px;
    `;

    constructor(props) {
        super(props);
        this.state = {
           words: props.words,
        }
    }

    render() {
        return (
                <div className={this.wordInput}>
                  <div className={this.words}>
                    {this.state.words}
                  </div>
                </div>
             );
    }
}

export default WordInput;
