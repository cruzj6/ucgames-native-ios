/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { DashboardContainer } from './components/DashboardContainer'
import appStyles from './style/appStyle';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS
} from 'react-native';

export default class ucgamesnative extends Component {
  render() {
    return (
        <NavigatorIOS
          style={styles.container}
          initialRoute={{
            title: "Dashboard",
            component: DashboardContainer,
            passProps: {
              componentStyles: appStyles.navContent
            }
          }}
        />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

AppRegistry.registerComponent('ucgamesnative', () => ucgamesnative);
