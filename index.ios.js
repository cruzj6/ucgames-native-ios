import React from 'react';
import { Provider } from 'react-redux';
import {
  AppRegistry,
} from 'react-native';
import TopTracked from './components/TopTracked/TopTracked';
import store from './store';

const UCGamesNative = () => (
  <Provider store={store}>
    <TopTracked />
  </Provider>
);

AppRegistry.registerComponent('ucgamesnative', () => UCGamesNative);
