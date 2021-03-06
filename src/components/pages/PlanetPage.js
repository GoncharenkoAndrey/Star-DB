import React, {Component} from "react";
import {PlanetList} from "../sw-components/lists";
import PlanetDetails from "../sw-components/PlanetDetails";
import ErrorBoundry from "../ErrorBoundry/ErrorBoundry";
import Row from "../Row/Row";
import SwapiService from "../../services/SwapiService";
export default class PlanetPage extends Component {
	swapiService = new SwapiService();
	state = {
		selectedPlanet: null,
		hasError: false
	}
	onPlanetSelected = (id) => {
		this.setState({
			selectedPlanet: id
		});
	}
	componentDidCatch() {
		this.setState({
			hasError: true
		});
	}
	render() {
		return (
			<ErrorBoundry>
				<Row left = {<PlanetList onItemSelected = {this.onPlanetSelected} />} right = {<PlanetDetails itemId = {this.state.selectedPlanet}/>} />
			</ErrorBoundry>
		);
	}
}