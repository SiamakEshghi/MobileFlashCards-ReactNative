import { AsyncStorage } from 'react-native';
import { DECK_CARDS_KEY } from '../../../Public/Keys';


export function fetchDecks() {
       return AsyncStorage.getItem(DECK_CARDS_KEY)
        .then((result) => { 
            return JSON.parse(result);
        });
}
