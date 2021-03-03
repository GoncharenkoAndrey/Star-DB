import React, {Component} from "react";
import ItemList from "../ItemList/ItemList";
import ItemDetails, {Record} from "../ItemDetails/ItemDetails";
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
		const planetList = (
			<ItemList getData = {this.swapiService.getAllPlanets}
					onItemSelected = {this.onPlanetSelected} >
					{(i) => `${i.name} (${i.diameter})`}
			</ItemList>
		);
		const planetDetails = (<ItemDetails itemId = {this.state.selectedPlanet}
				getData = {this.swapiService.getPlanet}
				getImageUrl = {this.swapiService.getPlanetImage} >
					<Record field = "name" label = "Name" />
				</ItemDetails>
		);
		return (
			<ErrorBoundry>
				<Row left = {planetList} right = {planetDetails} />
			</ErrorBoundry>
		);
	}
}