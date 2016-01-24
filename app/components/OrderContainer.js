import React from 'react';
import AddOrder from './AddOrder';
import OrdersList from './OrdersList';
import {addOrder} from '../actions/OrderActions';
import OrderStore from '../stores/OrderStore';

export default class OrderContainer extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			orderList : OrderStore.getOrderList()
		};
		this._onChange = this._onChange.bind(this);
	}

	componentDidMount(){
		OrderStore.addChangeListener(this._onChange);
	}

	componentWillAmount(){
		OrderStore.removeChangeListener(this._onChange);
	}

	_onChange(){
		this.setState({
			orderList: OrderStore.getOrderList()
		});
	}

	_handleAddOrder(order){
		console.log("menu : "+order.menuType + ", sauce : "+ order.sauce);
		addOrder(order);
	}

	render(){
		return(
			<div>
				<AddOrder add = {this._handleAddOrder}/>
				<OrdersList orders = {this.state.orderList}/>
			</div>
		);
	}
}