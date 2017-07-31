import React from 'react';
import PropTypes from 'prop-types';
import _get from 'lodash/fp/get';
import { Text, View, StyleSheet } from 'react-native';
import { compose, mapProps, setStatic } from 'recompose';

const GameInfo = ({ id }) => (
  <View style={styles.container}>
    <Text>{id}</Text>
    <Text>hi!</Text>
  </View>
);

GameInfo.propTypes = {
  id: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

const EnhancedGameInfo = compose(
  setStatic('navigationOptions', { title: 'Game Info' }),
  mapProps(({ navigation, ...rest }) => ({
    id: _get(['state', 'params', 'id'], navigation),
    ...rest,
  })),
)(GameInfo);

EnhancedGameInfo.propTypes = {
  ...GameInfo.propTypes,
};

export default EnhancedGameInfo;
