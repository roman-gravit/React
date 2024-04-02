import React, { Component } from "react";

class CounterButton extends Component {
	state = {
		counter: 0
	}

	handleClick = () => {
		/** use setState to change state */
		this.setState( ({counter}) => ({
			counter: ++counter
		})) 
	}

	render() {
		const { counter } = this.state;

		return (
			/** return only single root element */
			<div>
				<h2>Hello!</h2>
				<div>{counter}</div>
				<button onClick={this.handleClick}>+1</button>
			</div>
		);
	}
}

export default CounterButton;