import React, {Component} from "react";
import ItemList from "../ItemList/ItemList";
import ItemDetails, {Record} from "../ItemDetails/ItemDetails";
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
		const starshipList = (<ItemList getData = {this.swapiService.getAllStarships}
			onItemSelected = {this.onStarshipSelected}>
				{(i) => `${i.name} (${i.model})`}
			</ItemList>
			);
		const starshipDetails = (<ItemDetails itemId = {this.state.selectedStarship}
			getData = {this.swapiService.getStarship}
			getImageUrl = {this.swapiService.getStarshipImage}>
				<Record field = "model" label = "Model" />
				<Record field= "length" label = "Length" />
				<Record field = "costInCredits" label = "Cost" />
			</ItemDetails>
		);
		return (
			<ErrorBounry>
				<Row left = {starshipList} right = {starshipDetails} />
			</ErrorBounry>
		);
	}
}