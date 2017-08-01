import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
} from 'react-native';
import TopTrackedList from './topTrackedList';

const TopTracked = ({ navigation: { navigate } }) => (
  <View>
    <TopTrackedList onSelect={game => navigate('GameInfo', game)} />
  </View>
);

TopTracked.propTypes = {
  navigation: PropTypes.object,
};

export default TopTracked;
