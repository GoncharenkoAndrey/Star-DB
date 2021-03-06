import React from "react";
import "./ItemList.css";
const ItemList = ({data, onItemSelected, children}) => {
	const items = data.map((item) => {
		const {id} = item;
		const label = children(item);
		return (
			<li key = {id}
				className = "list-group-item"
				onClick = {() => onItemSelected(id)}>
				{label}
			</li>
		);
	});
	return (
		<ul className = "item-list list-group">
			{items}
		</ul>
	);
};
export default ItemList;