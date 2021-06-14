import { combineReducers } from 'redux';

import city from './City/reducer';

export const rootReducer = combineReducers({
    city,
})

export type RootState = ReturnType<typeof rootReducer>;
