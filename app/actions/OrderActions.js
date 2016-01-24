import AppDispatcher from '../dispatcher/AppDispatcher';
import {AppConstants} from '../constants/AppConstants';

export function addOrder(order){
	AppDispatcher.handleAction({
			actionType : AppConstants.ADD_ITEM,
			data : order
		});
}