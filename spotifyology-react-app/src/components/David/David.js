import React, { useRef } from 'react';
import { NavLink } from 'react-router-dom';
import KeywordButton from './KeywordButton';
import '../../index.css';


class David extends React.Component {
    constructor(props) {
        super(props); 
    }

    render() {
        return (
        <body>
            <KeywordButton
                keyword = "Upbeat"
                description = "Cheerful, exciting music to listen to when you’re feeling down or you just want to turn up"
                colorScheme = "linear-gradient(180deg, #FD0000, #FFA360)"
                colorTag = ""
            />
        </body>
        );
    }
  }
  
  export default David;