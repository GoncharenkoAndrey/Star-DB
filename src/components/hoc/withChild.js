import React from "react";
const withChild = (child) => (Component) => {
	return (props) => {
		return <Component {...props}>
			{child}
		</Component>
	};
};
export default withChild;