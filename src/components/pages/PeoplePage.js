import React, {Component} from "react";
import {PersonList} from "../sw-components/lists";
import PersonDetails from "../sw-components/PersonDetails";
import ErrorBoundry from "../ErrorBoundry/ErrorBoundry";
import Row from "../Row/Row";
export default class PeoplePage extends Component {
	state = {
		selectedPerson: null
	}
	onPersonSelected = (id) => {
		this.setState({
			selectedPerson: id
		});
	}
	render() {
		return (
			<ErrorBoundry>
				<Row left = {<PersonList onItemSelected = {this.onPersonSelected} />} right = {<PersonDetails itemId = {this.state.selectedPerson}/>} />
			</ErrorBoundry>
		);
	}
}