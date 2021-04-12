import React, { useRef } from 'react';
import { NavLink } from 'react-router-dom';
// import { css } from 'emotion';
import RankedSong from './RankedSong';
import SpotifyAuthorization from './SpotifyAuthorization';
import image from './album.jpeg';
import '../../index.css';


 /* <NavLink style={{color: colors.blue}} className={styles.link} to="/" > back to home ↗ </NavLink> */

class Jennifer extends React.Component {

    
    constructor(props) {
        super(props); 
    }

    render() {
        return (
            <body>
                <SpotifyAuthorization/>
                <RankedSong
                    rank = "1"
                    image = {image}
                    title = "Run"
                    artist = "Lee Jin Ah (Feat. GRAY)"
                    album = "Run"
                />
            </body>
        );
    }
  }
  
  export default Jennifer;