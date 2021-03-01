import React, {Component} from "react";
import ItemList from "../ItemList/ItemList";
import PersonDetails from "../PersonDetails/PersonDetails";
import ErrorIndicator from "../ErrorIndicator/ErrorIndicator";
import "./PeoplePage.css";
export default class PeoplePage extends Component {
	state = {
		selectedPerson: null,
		hasError: false
	}
	onPersonSelected = (id) => {
		this.setState({
			selectedPerson: id
		});
	}
	componentDidCatch() {
		this.setState({
			hasError: true
		});
	}
	render() {
		if(this.state.hasError) {
			return <ErrorIndicator />;
		}
		return (
			<div className = "row mb2">
				<div className = "col-md-6">
					<ItemList onItemSelected = {this.onPersonSelected} />
				</div>
				<div className = "col-md-6">
					<PersonDetails personId = {this.state.selectedPerson}/>
				</div>
			</div>
		);
	}
}