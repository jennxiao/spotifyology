import React, { useRef } from 'react';
import { NavLink } from 'react-router-dom';
import playlistSongComponent from "./tiff_playlist"
import { css } from 'emotion';



class Tiffanie extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        <body>
            <playlistSongComponent
              letter= "I"
              title= "If the World was Ending"
              artist= "JP Saxe, Julia Michaels"
            />
        </body>
        );
    }
  }

  export default Tiffanie;
