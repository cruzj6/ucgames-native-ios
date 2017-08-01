import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';

import Card from '../../elements/card';

const GameInfoHeader = ({ title, imageUri }) => (
  <View>
    <Card title={title} imageUri={imageUri}>
      <Text>Hello!</Text>
    </Card>
  </View>
);

GameInfoHeader.propTypes = {
  imageUri: PropTypes.string,
  title: PropTypes.string.isRequired,
};

export default GameInfoHeader;
