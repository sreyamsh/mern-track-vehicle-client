import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../actions/actionTypes';

export default (state = [], action) => {
	switch (action.type) {
		case DELETE:
			return state.filter((vehicle) => vehicle._id !== action.payload);
		case UPDATE:
			return state.map((vehicle) => vehicle._id === action.payload._id ? action.payload : vehicle);
		case FETCH_ALL:
			return action.payload;
    case CREATE:
      return [ ...state, action.payload ];
		default:
			return state;
	}
}