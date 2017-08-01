import React from 'react';
import PropTypes from 'prop-types';
import _get from 'lodash/fp/get';
import { View, StyleSheet } from 'react-native';
import { compose, mapProps, setStatic } from 'recompose';
import Shapes from '../../shapes';
import GameInfoHeader from './gameInfoHeader';

const { GameShape } = Shapes;

const GameInfo = ({ name, iconUrl }) => (
  <View style={styles.container}>
    <GameInfoHeader title={name} imageUri={iconUrl} />
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
    const { id, name, game, imageLink } = _get(['state', 'params'], navigation);

    return {
      id,
      name,
      game,
      iconUrl: imageLink.icon_url,
      ...rest,
    };
  }),
)(GameInfo);

EnhancedGameInfo.propTypes = {
  navigation: PropTypes.object,
};

export default EnhancedGameInfo;
