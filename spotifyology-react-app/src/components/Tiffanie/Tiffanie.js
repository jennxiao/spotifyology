import React, { useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { css } from 'emotion';


import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

import SongComp from './SongComp';
import WordInput from './WordInput';
import WelcomeText from './WelcomeText';




class Tiffanie extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
        <div>
          <WelcomeText
            text = "Here is your playlist, __________!"
          />
            <Button variant="light"> Generate New Playlist </Button>
            <WordInput
                words = "I Love You"
            />
            <SongComp
                letter= "I"
                title= "If the World was Ending"
                artist= "JP Saxe, Julia Michaels"
            />
            <SongComp
                letter= "L"
                title= "Love Story"
                artist= "Taylor Swift"
            />
            <SongComp
                letter= "O"
                title= "Ophelia"
                artist= "The Lumineers"
            />
            <SongComp
                letter= "V"
                title= "Vienna"
                artist= "Billie Joel"
            />
            <SongComp
                letter= "E"
                title= "Everybody Talks"
                artist= "Neon Trees"
            />
            <SongComp
                letter= "Y"
                title= "Yellow"
                artist= "Coldplay"
            />
            <SongComp
                letter= "O"
                title= "ocean eyes"
                artist= "Billie Eilish"
            />
            <SongComp
                letter= "U"
                title= "UCLA"
                artist= "RL Grime, 24hrs"
            />
        </div>
        );
    }
  }

  export default Tiffanie;
