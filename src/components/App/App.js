import React, {Component} from "react";
import Header from "../Header/Header";
import RandomPlanet from "../RandomPlanet/RandomPlanet";
import PeoplePage from "../PeoplePage/PeoplePage";
import "./App.css";
export default class App extends Component {
	state = {
		showRandomPlanet: true
	};
	toggleRandomPlanet = () => {
		this.setState((state) => {
			return {
				showRandomPlanet: !state.showRandomPlanet
			};
		});
	};
	render(){
		const planet = this.state.showRandomPlanet ? <RandomPlanet /> : null;
		return (
			<div className = "stardb-app">
				<Header />
				{planet}
				<button className = "toggle-planet btn btn-warning btn-lg"
				onClick = {this.toggleRandomPlanet} >
					Toggle Random Planet
				</button>
				<PeoplePage />
			</div>
		);
	}
};