import React from 'react';
import RaisedButton from 'material-ui/lib/raised-button';
import TextField from 'material-ui/lib/text-field';
import $ from 'jquery';
import { addOrder } from '../actions/OrderActions'
import { connect } from 'react-redux';

@connect(null, {addOrder})
export default class AddOrder extends React.Component{

	const propTypes = {
		addOrder : PropTypes.func.isRequired
	}
	
	// constructor(props){
	// 	super(props);
	// 	this._handleSubmit = this._handleSubmit.bind(this);
	// }

	@autobind
	addOrder(){
		// let menuType = this.refs.menuType.value;
		let menuType = $('#menuType').val();
		let sauce = $('#sauce').val();
		let order = {
			menuType : menuType,
			sauce : sauce
		}
		this.props.addOrder(order);
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
				<RaisedButton onClick = {this.addOrder} label="Ajouter" primary={true} />
			</div>
		);
	}
}