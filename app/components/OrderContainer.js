import React from 'react';
import AddOrder from './AddOrder';
import OrdersList from './OrdersList';
import {addOrder} from '../actions/OrderActions';
import OrderStore from '../stores/OrderStore';

export default class OrderContainer extends React.Component{

	render(){
		return(
			<div>
				<AddOrder />
				<OrdersList />
			</div>
		);
	}
}