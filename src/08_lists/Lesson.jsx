
import React, { Component, Fragment} from "react";

/*const ValidationMsg = ({ val}) => {
	if(val>=10) {
		return <h2>Greater than 10</h2>;

	} else {
		return <h3>Less than 10</h3>;
	}
}*/

const Tab1 = () => (
	<h1>Text of tab1</h1>
)

const Tab2 = () => (
	<h1>Text of tab2</h1>
)

const Tab3 = () => (
	<h1>Text of tab3</h1>
)

const people = ["Jack", "Max", "Leo", "Uma"];

const TABS_BTN = [
	{
		dataName: 1, title: "Tab1"
	},
	{
		dataName: 2, title: "Tab2"
	},
	{
		dataName: 3, title: "Tab3"
	}
]


class App extends Component {

	state = {
		activeTab: 1
	}

	handleTab = (e) => {
		this.setState({
			activeTab: +e.target.getAttribute("data-name")
		})
	}

	render() {
		const { activeTab } = this.state;
		return (
			<Fragment>

				{TABS_BTN.map(({ dataName, title}) => (
					<button 
						data-name={dataName} 
						onClick={this.handleTab}
						key={`${dataName}=${title}`}
					 >
						{title}
					</button>
				))}
				
				{  activeTab === 1 
					? <Tab1 />
					: activeTab === 2 
						?  <Tab2 />
						:  <Tab3 />
				}
				<div>
					{`Active tab is: ${activeTab === 1 ? 'first' : activeTab === 2 ? 'second' : 'third'}`}
				</div>
				<ul>
					{people.map((person, index) => (
						<li key={index}>{person}</li>
					))}
				</ul>
			</Fragment>

		);
	}
} 

/**
 * 				{activeTab === 1 && <Tab1 />}
				{activeTab === 2 && <Tab2 />}
				{activeTab === 3 && <Tab3 />}
 */


/*const App = () => {
	const val = 8;
		
	return (
			<div>

				{
					val >=10
						? <h2>Greater than 10</h2>
						:  <h3>Less than 10</h3>
				}
				{
					val && <span>We have val</span>
				}

			</div>

			//<ValidationMsg val = {8} />
	);

}*/

export default App;