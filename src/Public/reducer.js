import { SAVE_NEW_DECK } from '../Modules/NewDeck/actionType';
import { SET_LOADED_DECKS, SET_SELECTED_KEY } from '../Modules/DeckList/actionTypes';
import { ADD_NEW_CARD } from '../Modules/NewCard/actionTypes';

const INITIAL_DATA = {
    decks: null,
    selectedKey: null
};

export default (state = INITIAL_DATA, action) => {
    switch (action.type) {
        case SET_LOADED_DECKS:
            return { ...state, decks: action.entities };
        case SAVE_NEW_DECK:
            return { ...state, 
                decks: { ...state.decks, [action.key]: action.deck }
            };
        case SET_SELECTED_KEY:
            return { ...state, selectedKey: action.key };
        case ADD_NEW_CARD:
            return { ...state, 
                 decks: { ...state.decks,
                       [action.key]: { ...state.decks[action.key],  
                        question: state.decks[action.key].question.concat(action.card) } }
            };
        default: 
        return state;
    }
};

