import * as t from './actionType';

export const addNewDeck = (key, deck) => {
    return (dispatch) => {
        dispatch({ type: t.SAVE_NEW_DECK, key, deck });
    };
};
