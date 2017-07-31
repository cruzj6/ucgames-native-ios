import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
} from 'react-native';
import TopTrackedList from './topTrackedList';

const TopTracked = ({ navigation: { navigate } }) => (
  <View>
    <TopTrackedList onSelect={id => navigate('GameInfo', { id })} />
  </View>
);

TopTracked.propTypes = {
  navigation: PropTypes.object,
};

export default TopTracked;
