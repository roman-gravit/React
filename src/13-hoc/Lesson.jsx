import React, { Component } from 'react';
import LoadingHOC from './loading-HOC';

class AppComponentUI extends Component {
  	render() {
    	return (
      	<div>{this.props.data.title}</div>
    	);
  	}
}

const AppComponent = LoadingHOC('data')(AppComponentUI);

export class Lesson extends Component {
  state = {
    data: {},
  }

  componentDidMount() {
	console.log("componentDidMount->");
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(data => this.updateState(data))
  }

  updateState = (data) => {
	console.log("updateState->");
    window.setTimeout(() => {
		console.log("setTimeout->");
        this.setState({ data })
    }, 3000);
  }

  render() {
    return (
      <AppComponent data={this.state.data} />
    );
  }
}

/*
const AppLink = (props) => ({
  render: () => (
    <Link {...props} activeClassName="active" />
  )
})

class Lesson extends Component {
  render() {
    return (
      <Router>
        <nav>
          <AppLink to="/">Home</AppLink>
          <AppLink to="/portfolio">Portfolio</AppLink>
          <AppLink to="/contacts">Contacts</AppLink>
        </nav>
      </Router>
    );
  }
}
*/
