import React, {Component} from "react";
import spotlogo from './spotlogo.png';
import { useHistory } from 'react-router-dom'

class Header extends React.Component {
    render() {
        return (
            <div>
                <div id="second">
                    <table width="100%">
                    <tr width="100%">
                    <td width="275"><img src={spotlogo} className="App-spotlogo" alt="berklogo" height={125} width={200}/> </td>
                    <td width="30%"><p id="blue">Spotify-ology</p> </td>
                    <td><h2 id="blue">Top Tracks<br/></h2></td>
                    </tr>
                    </table>

                </div>
            </div>
        )
    }
}

export default Header;