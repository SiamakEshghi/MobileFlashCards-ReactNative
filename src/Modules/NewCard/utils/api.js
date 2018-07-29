import { AsyncStorage } from 'react-native';
import { DECK_CARDS_KEY } from '../../../Public/Keys';

export const saveNewCardInDataBase = (card, key) => {
   return AsyncStorage.getItem(DECK_CARDS_KEY)
    .then((results) => {
        const data = JSON.parse(results);
        data[key].question.push(card);
        AsyncStorage.setItem(DECK_CARDS_KEY, JSON.stringify(data));
    });
};
