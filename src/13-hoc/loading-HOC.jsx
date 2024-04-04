import React, { Component} from "react";
import "./loading-HOC.css";

const isEmpty = (prop) => (
  	prop === null 
  	|| prop === undefined 
  	|| (prop.hasOwnProperty('length') && prop.length === 0) 
  	|| (prop.constructor === Object && Object.keys(prop).length === 0)
);

const LoadingHOC = (loadingProp) => (WrappedComponent) => {
	console.log("LoadingHOC->");
	return class LoadingHOC extends Component {
	  render() {
		return isEmpty(this.props[loadingProp]) 
		? <div className="loader" />
		: <WrappedComponent {...this.props} />;
	  }
	}
}

export default LoadingHOC;