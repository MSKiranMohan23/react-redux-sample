import users from './users.reducers';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    users
    // your own reducers
})

export default rootReducer