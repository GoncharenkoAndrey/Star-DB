import React, {Component} from "react";
import {StarshipList} from "../sw-components/lists";
import StarshipDetails from "../sw-components/StarshipDetails";
import ErrorBounry from "../ErrorBoundry/ErrorBoundry";
import Row from "../Row/Row";
import SwapiService from "../../services/SwapiService";
export default class StarshipPage extends Component {
	swapiService = new SwapiService();
	state = {
		selectedStarship: null,
		hasError: false
	}
	onStarshipSelected = (id) => {
		this.setState({
			selectedStarship: id
		});
	}
	componentDidCatch() {
		this.setState({
			hasError: true
		});
	}
	render() {
		return (
			<ErrorBounry>
				<Row left = {<StarshipList onItemSelected = {this.onStarshipSelected} />} right = {<StarshipDetails itemId = {this.state.selectedStarship}/>} />
			</ErrorBounry>
		);
	}
}