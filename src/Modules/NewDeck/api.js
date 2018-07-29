import { AsyncStorage } from 'react-native';
import { DECK_CARDS_KEY } from '../../Public/Keys';

export const saveNewDeck = (newdeck, key) => {
    return AsyncStorage.mergeItem(DECK_CARDS_KEY, JSON.stringify({
        [key]: newdeck
      }));
};
