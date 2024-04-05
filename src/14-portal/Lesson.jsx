import React,  { Component } from 'react';
import { createPortal } from "react-dom";

export class MyPortal extends Component {
	el = document.createElement("div");

	componentDidMount() {
		document.body.appendChild(this.el);
	}

	componentWillUnmount() {
		document.body.removeChild(this.el);
	}

	render() {
		return createPortal(this.props.children, this.el);
	}
}

export class Lesson extends Component {
	state = {
		click: 0
	}

	handleClick = () => {
		this.setState(( {click} ) => ({
			click: click + 1			
		}))
	}

	render() {
		return (
			<div onClick={this.handleClick}>
				<p>Clicks: {this.state.click}</p>
				<span>Text</span>
				<MyPortal>
					<div>TEST PORTAL</div>
					<button>Click</button>
				</MyPortal>
			</div>
	  	);
	}
}
  