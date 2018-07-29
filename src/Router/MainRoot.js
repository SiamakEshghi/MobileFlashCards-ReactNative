import { createBottomTabNavigator, createStackNavigator, } from 'react-navigation';
import DeckList from '../Modules/DeckList/screen';
import NewDeck from '../Modules/NewDeck/screen';
import Deck from '../Modules/Deck/screen';
import NewCard from '../Modules/NewCard/screen';
import Quize from '../Modules/Quize/screen';

export const Tabs = createBottomTabNavigator({
    list: {
        screen: DeckList,
        navigationOptions: {
            tabBarLabel: 'DECKS'
        }
    },
    newDeck: {
        screen: NewDeck,
        navigationOptions: {
            tabBarLabel: 'NEW DECK'
        }
    }
}, {
navigationOptions: {
    header: null
}
});

export const MainRoot = createStackNavigator({
    home: {
        screen: Tabs,
        navigationOptions: {
            title: 'LIST'
        }
    },
    selectedDeck: {
        screen: Deck,
        navigationOptions: {
            title: 'DECK'
        }
    },
    newCard: {
        screen: NewCard,
        navigationOptions: {
            title: 'CARD'
        }
    },
    quize: {
        screen: Quize,
        navigationOptions: {
            title: 'QUIZE',
            headerLeft: null
        }
    }
});
