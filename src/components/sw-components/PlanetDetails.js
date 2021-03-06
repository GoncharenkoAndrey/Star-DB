import React from "react";
import ItemDetails, {Record} from "../ItemDetails/ItemDetails";
import withSwapiService from "../hoc/with-swapi-service";
const PlanetDetails = (props) => {
	return (
		<ItemDetails {...props}>
				<Record field = "name" label = "Name" />
		</ItemDetails>
	);
};
const mapMethodsToProps = (swapiService) => {
	return {
		getData: swapiService.getPlanet,
		getImageUrl: swapiService.getPlanetImage
	};
};
export default withSwapiService(mapMethodsToProps)(PlanetDetails);