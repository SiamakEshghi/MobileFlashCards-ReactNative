import { SET_LOADED_DECKS, SET_SELECTED_KEY } from './actionTypes';

export const setLoadedDecks = (entities) => {
    return (dispatch) => {
        dispatch({ type: SET_LOADED_DECKS, entities });
    };
};

export const setSelctedDeckKey = (key, callBack) => {
    return (dispatch) => {
        dispatch({ type: SET_SELECTED_KEY, key });
        callBack();
    };
};
