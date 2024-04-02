import React, { Component } from "react";

function Welcome() {
	return <h1>Hello World-1!</h1>;
}

class SuperWelcome extends Component {
	render() {
		return <h1>Hello World-2!</h1>;
	}
}

function Lesson() {
	return(
		<div>
			<Welcome />
			<SuperWelcome />
		</div>
	)
}

export default Lesson;