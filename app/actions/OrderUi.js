import { AppConstants } from '../constants/AppConstants';

export function setTabIndex(index) {
  return {
    type: AppConstants.CHANGE_TAB,
    index
  };
}
