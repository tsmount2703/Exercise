import React, { Component } from "react";
import { players } from '../shared/ListOfPlayers'
import PlayersPresentation from "./PlayerPresentation";
export class Main extends Component {
    constructor(){
        super();
        this.state = {
            Players: players
        };
    }
    render(){
        return <PlayersPresentation Players= {this.state.Players}/>
    }
}
export default Main 