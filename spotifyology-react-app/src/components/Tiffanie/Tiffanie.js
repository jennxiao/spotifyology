import React, { useRef } from 'react';
import { NavLink } from 'react-router-dom';
// import playlistSongComponent from "./tiff_playlist";
import Test from './Test';



class Tiffanie extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        <div>
            <Test
                letter= "I"
                title= "If the World was Ending"
                artist= "JP Saxe, Julia Michaels"
            />
        </div>
        );
    }
  }

  export default Tiffanie;
