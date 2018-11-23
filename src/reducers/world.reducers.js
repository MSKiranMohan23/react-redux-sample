import { WORLDDATA } from '../actions/users.actions';

let initialState = {};
export default (state = initialState,action) => {

    switch(action.type){
        
        case WORLDDATA :
        	return action.data
        default:
            return state
    }
}