import React from "react";
import {SwapiServiceConsumer} from "../swapi-service-context/swapi-service-context";
const withSwapiService = (mapMethodsToProps) => (Component) => {
	return (props) => {
		return (
			<SwapiServiceConsumer>
			{
				(swapiService) => {
					const serviceProps = mapMethodsToProps(swapiService);
					return <Component {...props} {...serviceProps} />
				}
			}
			</SwapiServiceConsumer>
		);
	};
};
export default withSwapiService;