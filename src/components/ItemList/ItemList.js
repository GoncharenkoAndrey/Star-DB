import React, {Component} from "react";
import Spinner from "../Spinner/Spinner";
import "./ItemList.css";
export default class ItemList extends Component {
	state = {
		itemsList: null
	};
	componentDidMount() {
		const {getData} = this.props;
		getData()
		.then((itemsList) => {
			this.setState({
				itemsList
			});
		});
	}
	renderItems(items) {
		return items.map((item) => {
			const {id} = item;
			const label = this.props.children(item);
			return (
				<li key = {id}
					className = "list-group-item"
					onClick = {() => {this.props.onItemSelected(id)}}>
					{label}
				</li>
			);
		});
	}
	render() {
		const {itemsList} = this.state;
		if(!itemsList) {
			return <Spinner />;
		}
		const items = this.renderItems(itemsList);
		return (
			<ul className = "item-list list-group">
				{items}
			</ul>
		);
	}
}