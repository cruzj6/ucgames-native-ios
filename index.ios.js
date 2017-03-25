import React, { Component } from 'react';
import { Provider } from 'react-redux';
import DashboardContainer from './components/Dashboard/DashboardContainer';
import TopTracked from './components/TopTracked/TopTracked';
import appStyles from './style/appStyle';
import store from './store.js';
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
			<Provider store={store}>
        /*<NavigatorIOS
          style={styles.container}
          initialRoute={{
            title: "Dashboard",
            component: DashboardContainer,
            passProps: {
              componentStyles: appStyles.navContent,
							trackedGames: [] //TODO: Temp remove this
            }
          }}
        />*/
				<NavigatorIOS
          style={styles.container}
          initialRoute={{
            title: "TopTracked",
            component: TopTracked
          }}
        />
			</Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

AppRegistry.registerComponent('ucgamesnative', () => ucgamesnative);
