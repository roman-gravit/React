import React, { Component, Fragment } from "react";


const POSITIONS = [
	{
		id: "1", value: "1", title: "1"
	},
	{
		id: "2", value: "2", title: "2"
	},
	{
		id: "3", value: "3", title: "3"
	}
];

class Form extends Component {

	state = {
		inputText: "",
		textareaText: "",
		selectText: "",
		showData: {
			name: "",
			text: "",
			position: ""
		}
	}

    handleInputChange = ({ target: { value }}) => {
		this.setState({
			inputText: value
		})
	}

    handleTextAreChange = ({ target: { value }}) => {
		this.setState({
			textareaText: value
		})
	}

    handleSelectChange = ({ target: { value }}) => {
		this.setState({
			selectText: value
		})
	}


	handleButtonClick = (e) => {
		e.preventDefault();
		const { inputText, textareaText, selectText} = this.state;
		this.setState({
			textareaText: "",
			inputText: "",
			selectText: "",
			showData: {
				name: inputText,
				text: textareaText,
				position: selectText
			}
		})
	}

	render() {
		const { inputText, textareaText, selectText, showData } = this.state;
		const { name, text, position } = showData;
		return (
			<Fragment>
				<form>
					<label>
						Name:
						<input onChange = {this.handleInputChange} type="text" name="name" value={inputText}></input>
					</label>
					<br/>
					<label htmlFor="text">Text:</label>
					<textarea  onChange = {this.handleTextAreChange} id="text" value={textareaText} />
					<br/>
					<select onChange={this.handleSelectChange} value={selectText}>
						{POSITIONS.map( ({id, value, title}) => (
							<option key={id} value={value}> {title} </option>
						))}
					</select>
					
					<br/>
					<button onClick={this.handleButtonClick}>Show</button>
				</form>
				<h2>{name}</h2>
				<h3>{text}</h3>
				<h3>{position}</h3>
			</Fragment>
		);
	}
}

export default Form;