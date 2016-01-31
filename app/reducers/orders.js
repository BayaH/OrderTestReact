const initialState = {
	orders = []
}

export default function orders(state = initialState, action={}){
	switch(action.actionType){
		case AppConstants.ADD_ITEM:
		return{
			...state,
			orders : state.orders.push(action.order);
		};
		break;
		default:
			return state;
	}
}