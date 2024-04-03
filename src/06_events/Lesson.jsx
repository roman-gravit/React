import React, { Component } from "react";
import PropTypes from "prop-types";


const MyLink = ({text, onClick}) => (
	<a href="/test" onClick={onClick}>{text}</a>
);

MyLink.propTypes = {
	text: PropTypes.string,
	onClick: PropTypes.func
}

MyLink.defaultProps = {
	text: "link",
	onClick: () => {}
}

class App extends Component {

	handleClick = (e) => {
		e.preventDefault();
		console.log("Clicked on Link");
		// If you want to have 2 handlers for one event:
		// 1. Call second handler from the first
		// this.test();
		// 2. Create wrapper method, call both handlers inside it
	} 

	render() {
		return (
			<MyLink onClick={this.handleClick()} />
		);
	}
}

export default App;