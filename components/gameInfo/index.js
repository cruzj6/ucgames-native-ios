import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, StyleSheet } from 'react-native';
import { compose, setStatic } from 'recompose';

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
)(GameInfo);

EnhancedGameInfo.propTypes = {
  ...GameInfo.propTypes,
};

export default EnhancedGameInfo;
