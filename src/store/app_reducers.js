import { handleActions } from 'redux-actions';
import { ADD_PRODUCT } from './actions';
let appState = {
    total_items: 0
};
export const Reducer = handleActions({
    [ADD_PRODUCT]: (appState) => {
        return {...appState, total_items: appState.total_items+1}
    }
}, appState)
