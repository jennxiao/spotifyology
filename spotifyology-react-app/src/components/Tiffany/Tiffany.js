import React, { useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { css } from 'emotion';
import Figure from 'react-bootstrap/Figure'
import FigureImage from 'react-bootstrap/FigureImage'
import FigureCaption from 'react-bootstrap/FigureCaption'
import image from './Spotify-logo.png'


class Tiffany extends React.Component {
    constructor(props) {
        super(props); 
        
    }

    render() {
        return (
        <body>
            <Figure>
            <Figure.Image
                width={171}
                height={180}
                alt="171x180"
                src={image}
            />
            <Figure.Caption>
                Spotify logo.
            </Figure.Caption>
            </Figure>
        </body>
        );
    }
  }
  
  export default Tiffany;