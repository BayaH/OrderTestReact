import React from 'react';
import RaisedButton from 'material-ui/lib/raised-button';
import TextField from 'material-ui/lib/text-field';
import $ from 'jquery';

export default class AddOrder extends React.Component{
	
	constructor(props){
		super(props);
		this._handleSubmit = this._handleSubmit.bind(this);
	}

	_handleSubmit(){
		// let menuType = this.refs.menuType.value;
		let menuType = $('#menuType').val();
		let sauce = $('#sauce').val();
		let order = {
			menuType : menuType,
			sauce : sauce
		}
		this.props.add(order);
		this.refs.menuType.value = '';
		this.refs.sauce.value = '';
	}

	render(){
		return(
			<div>    
				<label>Type : </label>
				<TextField hintText="Menu" id = "menuType"/>
				<br/>
				<label>Sauce : </label>
				<TextField hintText="Sauce" id = "sauce"/>
				<br/>
				<RaisedButton onClick = {this._handleSubmit} label="Ajouter" primary={true} />
			</div>
		);
	}
}