import React from 'react';
import PropTypes from 'prop-types';
import _get from 'lodash/fp/get';
import { View, StyleSheet, Text } from 'react-native';
import { compose, mapProps, setStatic } from 'recompose';
import Shapes from '../../shapes';
import Card from '../../elements/card';

const { GameShape } = Shapes;

const GameInfo = ({ name, iconUrl }) => (
  <View style={styles.container}>
    <Card title={name} imageUri={iconUrl}>
      <Card>
        <Text>Some content!</Text>
      </Card>
    </Card>
    <Card title={name} imageUri={iconUrl}>
      <Card>
        <Text>Some content!</Text>
      </Card>
    </Card>
  </View>
);

GameInfo.propTypes = {
  ...GameShape.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0,
    flexDirection: 'column',
    alignItems: 'flex-start',
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
