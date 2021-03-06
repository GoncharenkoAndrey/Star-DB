import ItemList from "../ItemList/ItemList";
import withData from "../hoc/withData";
import withChild from "../hoc/withChild";
import withSwapiService from "../hoc/with-swapi-service";
const renderName = ({name}) => <span>{name}</span>;
const renderModelAndName = ({model, name}) => <span>{name} ({model})</span>;
const mapPersonMethodsToProps = (swapiService) => {
	return {
		getData: swapiService.getAllPeople
	};
};
const mapPlanetMethodsToProps = (swapiService) => {
	return {
		getData: swapiService.getAllPlanets
	};
};
const mapStarshipMethodsToProps = (swapiService) => {
	return {
		getData: swapiService.getAllStarships
	};
};
const PersonList = withSwapiService(mapPersonMethodsToProps)(withData(withChild(renderName)(ItemList)));
const PlanetList = withSwapiService(mapPlanetMethodsToProps)(withData(withChild(renderName)(ItemList))); 
const StarshipList = withSwapiService(mapStarshipMethodsToProps)(withData(withChild(renderModelAndName)(ItemList)));
export {
	PersonList,
	PlanetList,
	StarshipList
};