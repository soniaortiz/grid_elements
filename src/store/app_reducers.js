import { handleActions } from 'redux-actions';
import { ADD_PRODUCT, ADD_PRODUCT_DESCRIPTION } from './actions';
let appState = {
    total_items: 0,
    items: []
};
export const Reducer = handleActions({
    [ADD_PRODUCT]: (appState) => {
        return {...appState, total_items: appState.total_items+1}
    },
    [ADD_PRODUCT_DESCRIPTION]: (appState, action)=>{
        return {
            ...appState,
            items: [...appState.items, action.payload]
        }
    }

}, appState)
