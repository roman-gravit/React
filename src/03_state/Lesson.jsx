import React, { Component } from "react";
import PropTypes from "prop-types";

const Counter = ({counter, func, string, number}) => {
	console.log(func, string, number);
	return <h1>{`Counter component. Counter value1 is: ${counter} string:${string}`}</h1>
}

/**
 * Always a good practice is to validate the data we are getting through props. 
 * 
 * https://www.geeksforgeeks.org/reactjs-proptypes/?ref=lbp
 */
Counter.propTypes = {
	counter: PropTypes.number.isRequired,
	string: PropTypes.func,
	number: PropTypes.number,
	func: PropTypes.func,
}

/**
 * The defaultProps is a React component property that allows you to set default
 * values for the props argument. If the prop property is passed, it will be changed. 
 * The defaultProps can be defined as a property on the component class itself, 
 * to set the default props for the class.
 * 
 * https://www.geeksforgeeks.org/reactjs-defaultprops/
 */
Counter.defaultProps = {
	string: "hello",
	number: 0,
	func: () => {console.log("func")}
}

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
				<Counter 
				  counter={counter}
				/>
				<button onClick={this.handleClick}>+1</button>
			</div>
		);
	}
}

export default CounterButton;