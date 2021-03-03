import React, {Component} from "react";
import ItemList from "../ItemList/ItemList";
import ItemDetails, {Record} from "../ItemDetails/ItemDetails";
import ErrorBoundry from "../ErrorBoundry/ErrorBoundry";
import Row from "../Row/Row";
import SwapiService from "../../services/SwapiService";
import "./PeoplePage.css";
export default class PeoplePage extends Component {
	swapiService = new SwapiService();
	state = {
		selectedPerson: null
	}
	onPersonSelected = (id) => {
		this.setState({
			selectedPerson: id
		});
	}
	render() {
		const peopleList = (
			<ItemList getData = {this.swapiService.getAllPeople}
				onItemSelected = {this.onPersonSelected} >
				{(i) => `${i.name} (${i.birthYear})`}
			</ItemList>
		);
		const personDetails = (
			<ItemDetails itemId = {this.state.selectedPerson}
				getData = {this.swapiService.getPerson}
				getImageUrl = {this.swapiService.getPersonImage}>
				<Record field = "gender" label = "Gender" />
				<Record field = "eyeColor" label = "Eye color" />
			</ItemDetails>
		);
		return (
			<ErrorBoundry>
				<Row left = {peopleList} right = {personDetails} />
			</ErrorBoundry>
		);
	}
}