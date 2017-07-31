import React from 'react';
import { Provider } from 'react-redux';
import {
  AppRegistry,
} from 'react-native';
import Root from './components/root';
import store from './store';

const UCGamesNative = () => (
  <Provider store={store}>
    <Root />
  </Provider>
);

AppRegistry.registerComponent('ucgamesnative', () => UCGamesNative);
