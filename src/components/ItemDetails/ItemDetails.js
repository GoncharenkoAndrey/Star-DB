import React, { Component } from 'react';
import SwapiService from "../../services/SwapiService";
import './ItemDetails.css';
const Record = ({item, field, label}) => {
	return (
		<li className = "list-group-item">
			<span className = "term">{label}</span>
	        <span>{item[field]}</span>
	    </li>
	);
};
export {Record};
export default class ItemDetails extends Component {
	swapiService = new SwapiService();
	state = {
		item: null,
		image: null
	};
	componentDidMount() {
		this.updateItem();
	}
	componentDidUpdate(prevProps) {
		if(prevProps.itemId !== this.props.itemId) {
			this.updateItem();
		}
	}
	updateItem() {
		const {itemId, getData, getImageUrl} = this.props;
		if(!itemId) {
			return;
		}
		getData(itemId)
		.then((item) => {
			this.setState({
				item,
				image: getImageUrl(itemId)
			});
		});
	}
	render() {
		if(!this.state.item) {
			return <span>Select a person from a list</span>;
		}
		const {id, name} = this.state.item;
    	return (
      		<div className = "person-details card">
	        	<img className = "person-image"
	          		src = {this.state.image}
					alt = {id}/>
	        	<div className = "card-body">
	          		<h4>{name}</h4>
	          		<ul className = "list-group list-group-flush">
					{
						React.Children.map(this.props.children, (child) => {
							return React.cloneElement(child, {item: this.state.item});
						})
					}
	          		</ul>
	        	</div>
      		</div>
    	);
  }
}