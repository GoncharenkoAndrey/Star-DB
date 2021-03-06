import React, {Component} from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import ErrorBoundry from "../ErrorBoundry/ErrorBoundry";
import Header from "../Header/Header";
import RandomPlanet from "../RandomPlanet/RandomPlanet";
import PeoplePage from "../pages/PeoplePage";
import PlanetPage from "../pages/PlanetPage";
import StarshipPage from "../pages/StarshipPage";
import SwapiService from "../../services/SwapiService";
import {SwapiServiceProvider} from "../swapi-service-context/swapi-service-context";
import "./App.css";
export default class App extends Component {
	swapiService = new SwapiService();
	render(){
		return (
			<ErrorBoundry>
				<SwapiServiceProvider value = {this.swapiService}>
					<Router>
					<div className = "stardb-app">
						<Header />
						<RandomPlanet />
						<Route path = "/" render = {() => <h2>Welcome to StarDB</h2>} exact/>
						<Route path = "/people" component ={PeoplePage} />
						<Route path = "/planets" component = {PlanetPage} />
						<Route path = "/starships" component = {StarshipPage} />
					</div>
					</Router>
				</SwapiServiceProvider>
			</ErrorBoundry>
		);
	}
};