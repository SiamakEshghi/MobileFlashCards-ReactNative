import { ADD_NEW_CARD } from './actionTypes';

export const saveNewcard = (card, key) => {
    return (dispatch) => {
        dispatch({ type: ADD_NEW_CARD, card, key });
    };
};
