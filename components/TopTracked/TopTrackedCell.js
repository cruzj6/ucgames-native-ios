import React, { PropTypes } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
} from 'react-native';
import globalStyles from '../../style/variables';

const TopTrackedCell = ({ name, iconUri, onSelect }) => (
  <TouchableHighlight onPress={onSelect}>
    <View style={styles.container}>
      <Image source={{ uri: iconUri, cache: 'force-cache' }} style={styles.imageStyle} />
      <Text style={styles.textStyle}>{name}</Text>
    </View>
  </TouchableHighlight>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageStyle: {
    width: 80,
    height: 80,
  },
  textStyle: {
    paddingLeft: 10,
    fontFamily: globalStyles.baseFontFamily,
  },
});

TopTrackedCell.propTypes = {
  onSelect: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  iconUri: PropTypes.string.isRequired,
};

export default TopTrackedCell;
