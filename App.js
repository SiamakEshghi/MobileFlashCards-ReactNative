import React from 'react';
import { Provider } from 'react-redux';
import store from './src/Redux/store';
import { MainRoot } from './src/Router/MainRoot';
import { setLocalNotification } from './src/Public/helper';

export default class App extends React.Component {
  componentDidMount = () => {
    //AsyncStorage.removeItem(DECK_CARDS_KEY);
    setLocalNotification();
  }
  render() {
    return (
      <Provider store={store}>
          <MainRoot />
      </Provider>
    );
  }
}

