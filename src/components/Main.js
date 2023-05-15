import React, { Component } from "react";
import { players } from '../shared/ListOfPlayers'
import PlayersPresentation from "./PlayerPresentation";
export class Main extends Component {
    constructor(){
        super();
        this.state = {
            Player: players
        };
    }
    render(){
        return <PlayersPresentation Player= {this.state.Player}/>
    }
}
export default Main 