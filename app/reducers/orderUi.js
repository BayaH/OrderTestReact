import { AppConstants } from '../constants/AppConstants';

const initialState = {
  tabIndex: 0
};

export default function orderUi(state = initialState, action = {}) {
  switch (action.type) {
    case AppConstants.CHANGE_TAB:
      return {
        ...state,
        tabIndex: action.index
      };
    default:
      return state;
  }
}
