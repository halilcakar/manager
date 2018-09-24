import { EMPLOYEE_CREATE, EMPLOYEE_SAVE_SUCCESS, EMPLOYEE_UPDATE } from '../actions/types';

const INITIAL_STATE = {
    name: '',
    phone: '',
    shift: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EMPLOYEE_UPDATE:
            const { prop, value } = action.payload;
            return { ...state, [prop]: value };
        case EMPLOYEE_CREATE:
        case EMPLOYEE_SAVE_SUCCESS:
            return INITIAL_STATE;
        default:
            return state;
    }
};