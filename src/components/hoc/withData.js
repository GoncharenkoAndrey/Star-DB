import React, {Component} from "react";
import Spinner from "../Spinner/Spinner";
import ErrorIndicator from "../ErrorIndicator/ErrorIndicator";
const withData = (View) => {
	return class extends Component {
		state = {
			data: null,
			loading: true,
			error: false
		};
		componentDidMount() {
			this.update();
		}
		update() {
			this.setState({
				loading: true
			});
			this.props.getData()
			.then((data) => {
				this.setState({
					data,
					loading: false
				});
			})
			.catch(() => {
				this.setState({
					loading: false,
					error: true
				});
			});
		}
		render() {
			const {data, loading, error} = this.state;
			if(loading) {
				return <Spinner />;
			}
			if(error) {
				return <ErrorIndicator />;
			}
			return <View {...this.props} data = {data} />
		}
	}
};
export default withData;