import React from 'react';
import PropTypes from 'prop-types';
import _get from 'lodash/fp/get';
import { Text, View, StyleSheet } from 'react-native';
import { compose, mapProps, setStatic } from 'recompose';
import Shapes from '../../shapes';
import GameInfoHeader from './gameInfoHeader';

const { GameShape } = Shapes;

const GameInfo = ({ name }) => (
  <View style={styles.container}>
    <GameInfoHeader title={name} />
  </View>
);

GameInfo.propTypes = {
  ...GameShape.isRequired,
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
  mapProps(({ navigation, ...rest }) => {
    const { id, name, game } = _get(['state', 'params'], navigation);

    return {
      id,
      name,
      game,
      ...rest,
    };
  }),
)(GameInfo);

EnhancedGameInfo.propTypes = {
  navigation: PropTypes.object,
};

export default EnhancedGameInfo;
