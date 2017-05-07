import { Reducer } from 'redux';
import { ActionType } from './../actions/index';

interface LocationState {
  address: string;
  cachedCity: string;
  invalidAddress: boolean;
  fetchingLocation: boolean;
  validatingLocation: boolean;
}

const initialState: LocationState = {
  address: '',
  cachedCity: '',
  invalidAddress: false,
  fetchingLocation: false,
  validatingLocation: false
};

const locationReducer: Reducer<LocationState> = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOCATION_CLEAR:
      return Object.assign({}, state, {
        address: ''
      });
    case ActionType.LOCATION_SET:
      return Object.assign({}, state, {
        address: action.payload
      });
    default:
      return state;
  }
};

export default locationReducer;
