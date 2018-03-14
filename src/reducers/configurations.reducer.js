import ActionType from './../actions/actionType';
import { defaultConfig } from './../common/constants'

const initialState = {
	configurations: {...defaultConfig}
};

export const configurationsReducer = (state = initialState, action) => {
	switch (action.type) {
		case ActionType.GET_LOAN_CONFIG:
			return state;
		case ActionType.GET_LOAN_CONFIG_SUCCESS:
			return { ...state, configurations: action.payload.data.configurations };
		case ActionType.GET_LOAN_CONFIG_FAILED:
			return { ...state, ...action.payload };
		default:
			return state;
	}
};

export default configurationsReducer
