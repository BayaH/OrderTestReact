import AppDispatcher from '../dispatcher/AppDispatcher';
import {AppConstants} from '../constants/AppConstants';
import {EventEmitter} from 'events';

const CHANGE_EVENT = 'change';

let _store ={
	list : []
} 

class OrderStoreClass extends EventEmitter{

	addChangeListener(cb){
		this.on(CHANGE_EVENT, cb);
	}

	removeChangeListener(cb){
		this.removeListener(CHANGE_EVENT, cb);
	}

	getOrderList(){
		return _store.list;
	}
}

const OrderStore = new OrderStoreClass();

AppDispatcher.register((payload) =>{
	const action = payload.action;

	switch(action.actionType){
		case AppConstants.ADD_ITEM:
			_store.list.push(action.data);
			OrderStore.emit(CHANGE_EVENT);
		break;
		default:
			return true;
	}
});

export default OrderStore;