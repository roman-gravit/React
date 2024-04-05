import React, { Component, Fragment } from "react";

const TittleContext = React.createContext();

const LevelThree = () => (
	<TittleContext.Consumer>
		{ ({ title, subTutle, click}) => (
			<Fragment>
				 <h1 onClick={click}> {title} </h1>
				 <h2> {subTutle} </h2>
			</Fragment>
		)}
	</TittleContext.Consumer>
)

const LevelTwo = () => <LevelThree />

const LevelOne = () => <LevelTwo  />

export class Lesson extends Component {
	render () {
		return (
			<TittleContext.Provider value={{ title: "Title3", subTutle: "Subtitle", click: () => {console.log("click")}}}>
				<LevelOne  />
			</TittleContext.Provider>
		);
	}
}

/*
const LevelThree = ({ title }) => <h1>{title}</h1>

const LevelTwo = ({ title }) => <LevelThree title = { title } />

const LevelOne = ({ title }) => <LevelTwo title = { title } />

export class Lesson extends Component {
	render () {
		return (
			<LevelOne title="simple title" />	
		);
	}
}
*/